import css from './Flag.module.css'


const FlagEnglish = ({ isActive, onClick }) => (
  <svg viewBox="0 0 60 30" className={css.flag} data-active={isActive} onClick={onClick}>
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
)

const FlagSpanish = ({ isActive, onClick })=> (
  <svg viewBox="0 0 60 30" className={css.flag} data-active={isActive} onClick={onClick}>
    <rect width="60" height="30" fill="#c60b1e"/>
    <rect width="60" height="15" fill="#ffc400" y="7.5"/>
  </svg>
)

const Flag = ({ language, isActive, onClick })=> {
  if (language === 'en') return <FlagEnglish isActive={isActive} onClick={onClick} />
  if (language === 'es') return <FlagSpanish isActive={isActive} onClick={onClick} />
  return null
}

export default Flag