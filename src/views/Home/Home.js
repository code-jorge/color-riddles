import { usePracticeGameInfo, useQuickGameInfo } from "../../context/GameState"
import { useTransitionView } from "../../hooks/useTransitionView"
import { COLORS } from "../../utils/levels"
import { clearGame } from "../../utils/storage"
import css from './Home.module.css'

const Home = ()=> {

  const transition = useTransitionView()

  const { resetPractice } = usePracticeGameInfo()
  const { resetQuickGame } = useQuickGameInfo()
 
  const handlePractice = ()=> {
    clearGame({ type: 'practice' })
    resetPractice()
    transition({
      to: "/practice/1",
      sound: "twinkle"
    })
  }

  const handleQuickGame = ()=> {
    clearGame({ type: 'quick' })
    resetQuickGame()
    transition({
      to: "/quick/1",
      sound: "twinkle"
    })
  }

  return (
    <div className={css.main}>
      <h1 className={css.title}>
        The{' '}
        <span className={css.titleLetter}>c</span>
        <span className={css.titleLetter}>o</span>
        <span className={css.titleLetter}>l</span>
        <span className={css.titleLetter}>o</span>
        <span className={css.titleLetter}>r</span>
        <span className={css.titleLetter}>f</span>
        <span className={css.titleLetter}>u</span>
        <span className={css.titleLetter}>l</span>
        {' '}game
      </h1>
      <p className={css.intro}>
        🧠{' '}<code>A game designed to mess with your head</code>
      </p>
      <div className={css.guide}>
        {COLORS.map(color=> (
          <div 
            key={color}
            className={css.guideColor} 
            data-bg={color}
          >
            <p className={css.colorName}>{color}</p>
          </div>
        ))}
      </div>
      <div className={css.buttons}>
        <button className={css.startButton} onClick={handleQuickGame}>
          <code>Quick game</code>
        </button>
        <button className={css.startButton} onClick={handlePractice}>
          <code>Practice</code>
        </button>
      </div>
    </div>
  )
}

export default Home