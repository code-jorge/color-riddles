import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { usePracticeGameInfo, useQuickGameInfo } from "../../context/GameState"
import { useTransitionView } from "../../hooks/useTransitionView"
import { getLevelData, PRACTICE_LEVELS, QUICK_GAME_LEVELS } from "../../utils/levels"
import css from './Level.module.css'

const getSound = ({
  isCorrect,
  isEnd
})=> {
  if (isEnd) return 'clap'
  if (isCorrect) return 'cheer'
  return 'sad'
}

const Level = ()=> {

  const [start, setStart] = useState(new Date().getTime())
  
  const { type, level } = useParams()
  
  const { words, hint, question, options } = useMemo(()=> getLevelData({ type, level }), [type, level])
  
  const transition = useTransitionView()

  const { setPracticeLevel } = usePracticeGameInfo()
  const { setQuickGameLevel } = useQuickGameInfo()

  useEffect(()=> {
    document.title = `Level ${level} | Color riddle`
    return ()=> document.title = 'Color riddle'
  }, [level])

  useEffect(()=> {
    setStart(new Date().getTime())
  }, [type, level])

  const handleNavigate = ({ isCorrect })=> {
    const nextLevel = +level + 1
    const maxLevel = type === 'practice' ? PRACTICE_LEVELS : QUICK_GAME_LEVELS
    const isEnd = nextLevel > maxLevel
    const to = isEnd ? `/${type}/end` : `/${type}/${nextLevel}`
    const sound = getSound({ isCorrect, isEnd })
    const now = new Date().getTime()

    const info = {
      level: +level,
      status: isCorrect ? 'correct' : 'incorrect',
      score: ((now - start) / 1000).toFixed(1)
    }

    if (type === 'practice') setPracticeLevel(info)
    if (type === 'quick') setQuickGameLevel(info)

    transition({ 
      to: to, 
      sound: sound,
      className: isEnd ? '' : 'fade',
      skipAnimation: isEnd
    })
  }

  const formatQuestion = (question)=> {
    const boldRegex = /\*\*(.*?)\*\*/g
    const parts = question.split(boldRegex)
    return parts.map((part, index)=> {
      const isBold = index % 2 === 1
      return isBold ? <strong key={index}>{part}</strong> : part
    })
  }

  return (
    <div className={css.main}>
      <div className={css.instructions}>
        <code className={css.question}>
          {formatQuestion(question)}
        </code>
        <code className={css.hint}>
          <span className={css.emoji}>💡</span> {hint}
        </code>
      </div>
      <p className={css.words}>
        {words.map((word, index)=> (
          <span
            key={index}
            className={css.word}
            data-color={word.color}
          >
            {word.label}
          </span>
        ))}
      </p>
      <div className={css.buttons} data-options={options.length}>
        {options.map((option)=> (
          <button 
            key={option.label} 
            className={css.button}
            onClick={()=> handleNavigate(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Level