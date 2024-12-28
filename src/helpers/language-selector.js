import React from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  {code: "en", lang: "English"},
  {code: "kr", lang: "Korean"},
  // {code: "en", lang: "English"},
]

const LanguageSelector = () => {

    const {i18n} = useTranslation()

    const selectLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

  return (
    <div className="same-style">
        <select
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