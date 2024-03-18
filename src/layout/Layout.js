import { Outlet, useParams } from "react-router-dom"
import { usePracticeGameInfo, useQuickGameInfo } from "../context/GameState"
import { useTransitionView } from "../hooks/useTransitionView"
import { COLORS, PRACTICE_LEVELS, QUICK_GAME_LEVELS } from "../utils/levels"
import Flag from "./Flag"
import { useLang } from "../context/Language"
import css from './Layout.module.css'

const Layout = ()=> {

  const transition = useTransitionView()
  const { lang, setLang } = useLang()

  const { type, level=0 } = useParams()

  const { resetPractice } = usePracticeGameInfo()
  const { resetQuickGame } = useQuickGameInfo()

  const totalLevels = type === 'practice' ? PRACTICE_LEVELS : QUICK_GAME_LEVELS

  const progress = level ? Math.round(+level / totalLevels * 100) : 0

  const handleNavigate = ()=> {
    resetPractice()
    resetQuickGame()
    transition({ to: "/" })
  }

  return (
    <>
      <header className={css.header}>
        <button 
          className={css.home}
          onClick={handleNavigate}
        >
          {COLORS.map(color=> (
            <div 
              key={color}
              className={css.homeColor} 
              data-bg={color}
            />
          ))}
        </button>
        <div className={css.lang}>
          <Flag language="en" isActive={lang === 'en'} onClick={()=> setLang('en')} />
          <Flag language="es" isActive={lang === 'es'} onClick={()=> setLang('es')} />
        </div>
      </header>
      <div className={css.progress}>
        <div 
          className={css.progressDetail} 
          style={{ width: `${progress}%`}} 
        />
      </div>
      <main className={css.main}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout