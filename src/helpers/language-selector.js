import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  {code: "en", lang: "English"},
  {code: "kr", lang: "Korean"},
  // {code: "ar", lang: "Arabic"}
]

const LanguageSelector = () => {

    const {i18n} = useTranslation()

    useEffect(() => {
      document.body.dir = i18n.dir()
    }, [i18n.language])

    const selectLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

  return (
    <div className="same-style">
        <select
            value={i18n.language}
            onChange={e => selectLanguage(e.target.value)}
            >
            {languages.map((language) => (
                <option key={language.code} value={language.code}>
                {language.lang}
                </option>
            ))}
        </select>
    </div>
  )
}

export default LanguageSelector