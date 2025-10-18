'use client'

import s from './LanguageSelect.module.css'
import { useRouter, usePathname } from 'next/navigation'

const options = [
    { value: 'ru', label: 'Русский' },
    { value: 'en', label: 'English' },
]

export const LanguageSelect = () => {
    const router = useRouter()
    const path = usePathname()
    const currentLang = path.split('/')[1] || 'ru'

    const handleLanguageChange = (newLang: string) => {
        // const pathWithoutLocale = path.replace(/^\/(en|ru)/, '') || '/'
        // const newUrl = `/${newLang}${pathWithoutLocale}`
        // router.push(newUrl)
        console.log('Language would change to:', newLang)
    }

    return (
        <div className={s.languageButtons}>
            <button
                className={`${s.langButton} ${currentLang === 'ru' ? s.active : ''}`}
                onClick={() => handleLanguageChange('ru')}
            >
                English
            </button>
            <button
                className={`${s.langButton} ${currentLang === 'en' ? s.active : ''}`}
                onClick={() => handleLanguageChange('en')}
            >
                Русский
            </button>
        </div>
    )
}
