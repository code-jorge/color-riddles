import { createContext, useContext, useState } from "react"
import { saveGame } from "../utils/storage"

export const GameStateContext = createContext({
  practice: [],
  setPracticeLevel: ()=> {},
  resetPractice: ()=> {},
  quickGame: [],
  setQuickGameLevel: ()=> {},
  resetQuickGame: ()=> {}
})

export const usePracticeGameInfo = () => {
  const { practice, setPracticeLevel, resetPractice } = useContext(GameStateContext)
  return { practice, setPracticeLevel, resetPractice }
}

export const useQuickGameInfo = () => {
  const { quickGame, setQuickGameLevel, resetQuickGame } = useContext(GameStateContext)
  return { quickGame, setQuickGameLevel, resetQuickGame }
}

const GameStateContextProvider = ({ children }) => {

  const [practice, setPractice] = useState([])
  const [quickGame, setQuickGame] = useState([])

  const setPracticeLevel = ({ level, status, score })=> {
    const levels = [
      ...practice.filter(l=> l.level !== level),
      { level, status, score }
    ]
    setPractice(levels)
    saveGame({
      type: 'practice',
      levels: levels
    })
  }

  const setQuickGameLevel = ({ level, status, score })=> {
    const levels = [
      ...quickGame.filter(l=> l.level !== level),
      { level, status, score }
    ]
    setQuickGame(levels)
    saveGame({
      type: 'quick',
      levels: levels
    })
  }

  const resetPractice = ()=> {
    setPractice([])
  }

  const resetQuickGame = ()=> {
    setQuickGame([])
  }

  const state = {
    practice,
    setPracticeLevel,
    resetPractice,

    quickGame,
    setQuickGameLevel,
    resetQuickGame
  }

  return (
    <GameStateContext.Provider value={state}>
      {children}
    </GameStateContext.Provider>
  )
}

export default GameStateContextProvider