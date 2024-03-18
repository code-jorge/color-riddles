import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePracticeGameInfo, useQuickGameInfo } from '../../context/GameState'
import useTimeout from '../../hooks/useTimeout'
import { useTransitionView } from '../../hooks/useTransitionView'
import { playSound } from '../../utils/sound'
import { clearGame } from '../../utils/storage'
import { useLang } from '../../context/Language'
import content from './End.lang'
import css from './End.module.css'

const EndTitle = ({ title })=> (
  <h1 className={css.title}>
    <code>{title}</code>
  </h1>
)

const EndStats = ({ resultPrefix, correct, total, resultSuffix, timeInfo, totalTime  })=> (
  <p className={css.intro}>
    <code>
      {resultPrefix} <span data-color="green">{correct}</span>/{total} {resultSuffix}
      <br />
      {timeInfo} <span data-color="pink">🕒 {totalTime}s</span>
    </code>
  </p>
)

const EndResults = ({ data, levelPrefix })=> (
  <div className={css.results}>
    <table className={css.table}>
      <tbody>
        {data.map((item, index)=> (
          <tr className={css.row} key={index}>
            <td className={css.levelCell}>
              <div 
                className={css.ball} 
                data-status={item.status}
              />
              <code>{levelPrefix} {item.level}</code>
            </td>
            <td className={css.scoreCell}>
              <span className={css.emoji}>🕒</span> <code>{item.score}s</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const EndCopyButton = ({ text, onClick, isCopied, copiedText })=> (
  <>
    <button className={css.copy} onClick={onClick}>
      <svg className={css.share} viewBox="0 0 32 32">
        <path d="M 23 5 C 20.800781 5 19 6.800781 19 9 C 19 9.777344 19.234375 10.5 19.625 11.117188 L 16.519531 15 L 11.855469 15 C 11.40625 13.285156 9.851563 12 8 12 C 5.800781 12 4 13.800781 4 16 C 4 18.199219 5.800781 20 8 20 C 9.851563 20 11.40625 18.714844 11.855469 17 L 16.519531 17 L 19.625 20.882813 C 19.234375 21.5 19 22.222656 19 23 C 19 25.199219 20.800781 27 23 27 C 25.199219 27 27 25.199219 27 23 C 27 20.800781 25.199219 19 23 19 C 22.304688 19 21.660156 19.195313 21.089844 19.511719 L 18.28125 16 L 21.089844 12.488281 C 21.660156 12.804688 22.304688 13 23 13 C 25.199219 13 27 11.199219 27 9 C 27 6.800781 25.199219 5 23 5 Z M 23 7 C 24.117188 7 25 7.882813 25 9 C 25 10.117188 24.117188 11 23 11 C 21.882813 11 21 10.117188 21 9 C 21 7.882813 21.882813 7 23 7 Z M 8 14 C 9.117188 14 10 14.882813 10 16 C 10 17.117188 9.117188 18 8 18 C 6.882813 18 6 17.117188 6 16 C 6 14.882813 6.882813 14 8 14 Z M 23 21 C 24.117188 21 25 21.882813 25 23 C 25 24.117188 24.117188 25 23 25 C 21.882813 25 21 24.117188 21 23 C 21 21.882813 21.882813 21 23 21 Z"/>
      </svg>
      {text}
    </button>
    {isCopied && (
      <code className={css.copied}>{copiedText}</code>
    )}
  </>
)

const EndBackButton = ({ text, onClick })=> (
  <button className={css.home} onClick={onClick}>
    <svg className={css.house} viewBox="0 0 26.39 26.39">
      <path d="M3.588,24.297c0,0-0.024,0.59,0.553,0.59c0.718,0,6.652-0.008,6.652-0.008l0.01-5.451c0,0-0.094-0.898,0.777-0.898h2.761    c1.031,0,0.968,0.898,0.968,0.898l-0.012,5.434c0,0,5.628,0,6.512,0c0.732,0,0.699-0.734,0.699-0.734V14.076L13.33,5.913 l-9.742,8.164C3.588,14.077,3.588,24.297,3.588,24.297z" />
      <path d="M0,13.317c0,0,0.826,1.524,2.631,0l10.781-9.121l10.107,9.064c2.088,1.506,2.871,0,2.871,0L13.412,1.504L0,13.317z" />
      <polygon points="23.273,4.175 20.674,4.175 20.685,7.328 23.273,9.525"/>
    </svg>
    {text}
  </button>
)

const End = ()=> {

  const transition = useTransitionView()

  const { type } = useParams()
  const { lang } = useLang()

  const { practice } = usePracticeGameInfo()
  const { quickGame } = useQuickGameInfo()

  const [isCopied, setCopied] = useState(false)

  const contentLang = content[lang]

  useTimeout(()=> {
    setCopied(false)
  }, isCopied ? 2000 : 0)

  useEffect(()=> {
    document.title = contentLang.title
    return ()=> document.title = contentLang.fallbackTitle
  }, [contentLang])

  useEffect(()=> {
    clearGame({ type })
  }, [type])

  const data = (type === 'practice' ? practice : quickGame)
    .sort((a, b)=> a.level - b.level)

  const total = data.length
  const correct = data.filter(item=> item.status === 'correct').length
  const totalTime = data.reduce((acc, item)=> acc + +item.score, 0).toFixed(1)

  const handleCopy = ()=> {
    playSound('click')
    const introText = contentLang.copyResult({ correct, total, totalTime })
    const levelsText = data.map(levelResult=> {
        const { level, status, score } = levelResult
        const result = status === 'correct' ? '🟢' : '🔴'
        return contentLang.copyLevel({ level, result, score })
      })
      .join('\n')
    const text = `${introText}\n\n${levelsText}`
    navigator.clipboard.writeText(text)
    setCopied(true)
  }

  const handleNavigateHome = ()=> {
    transition({
      to: "/",
      sound: "click"
    })
  }


  return (
    <div className={css.main}>
      <EndTitle title={contentLang.main} />
      <EndStats 
        resultPrefix={contentLang.resultPrefix}
        correct={correct} 
        total={total} 
        resultSuffix={contentLang.resultSuffix}
        timeInfo={contentLang.time}
        totalTime={totalTime}
      />
      <EndResults
        data={data}
        levelPrefix={contentLang.level}
      />
      {type === 'quick' && (
        <EndCopyButton 
          onClick={handleCopy} 
          isCopied={isCopied}
          text={contentLang.share}
          copiedText={contentLang.copy}
        />
      )}
      <EndBackButton
        onClick={handleNavigateHome}
        text={contentLang.home}
      />
    </div>
  )
}

export default End