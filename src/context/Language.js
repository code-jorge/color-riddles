import { createContext, useContext, useState } from "react"

export const LanguageContext = createContext({
  lang: 'en'
})

export const useLang = () => {
  const { lang, setLang } = useContext(LanguageContext)
  return { lang, setLang }
}

const LanguageContextProvider = ({ children }) => {

  const [lang, setLang] = useState('en')

  const state = { lang, setLang }

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider