import { usePracticeGameInfo, useQuickGameInfo } from "../../context/GameState"
import { useLang } from "../../context/Language"
import { useTransitionView } from "../../hooks/useTransitionView"
import { getColors } from "../../utils/levels"
import { clearGame } from "../../utils/storage"
import content from './Home.lang.json'
import css from './Home.module.css'

const HomeTitle = ({ prefix, title, suffix })=> {
  const letters = title.split('')
  return (
    <h1 className={css.title}>
      {prefix}{' '}
      {letters.map((letter, i)=> (
        <span key={i} className={css.titleLetter}>{letter}</span>
      ))}
      {' '}{suffix}
    </h1>
  )
}

const HomeSubtitle = ({ subtitle })=> (
  <p className={css.intro}>
    🧠{' '}<code>{subtitle}</code>
  </p>
)

const HomeButton = ({ label, onClick })=> (
  <button className={css.startButton} onClick={onClick}>
    <code>{label}</code>
  </button>
)

const Home = ()=> {

  const transition = useTransitionView()

  const { lang } = useLang()

  const contentLang = content[lang]

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
      <HomeTitle prefix={contentLang.prefix} title={contentLang.title} suffix={contentLang.suffix} />
      <HomeSubtitle subtitle={contentLang.subtitle} />
      <div className={css.guide}>
        {getColors().map(color=> (
          <div key={color.color} className={css.guideColor} data-bg={color.color}>
            <p className={css.colorName}>{color.label[lang]}</p>
          </div>
        ))}
      </div>
      <div className={css.buttons}>
        <HomeButton label={contentLang.practice} onClick={handlePractice} />
        <HomeButton label={contentLang.game} onClick={handleQuickGame} />
      </div>
    </div>
  )
}

export default Home