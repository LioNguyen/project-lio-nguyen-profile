import { useState, useMemo, type ReactNode } from 'react'
import { I18nContext, getLocaleData, interpolate, isRTLLanguage, type SupportedLocale, type TranslationFunction } from './index'

/**
 * I18nProvider Component
 * Provides internationalization context to the entire application
 * Manages locale state and provides translation function
 */
export interface I18nProviderProps {
  children: ReactNode
  defaultLocale?: SupportedLocale
}

export function I18nProvider({ children, defaultLocale = 'en' }: I18nProviderProps) {
  // Get initial locale from localStorage or use default
  const getInitialLocale = (): SupportedLocale => {
    const stored = localStorage.getItem('app-locale')
    if (stored && (stored === 'en' || stored === 'vi')) {
      return stored as SupportedLocale
    }
    return defaultLocale
  }

  const [locale, setLocaleState] = useState<SupportedLocale>(getInitialLocale)

  // Translation function
  const t: TranslationFunction = useMemo(() => {
    return (key: string, params?: Record<string, string | number>): string => {
      const localeData = getLocaleData(locale)
      const keys = key.split('.')
      
      // Navigate through nested object
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let value: any = localeData
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          // Return key if translation not found
          return key
        }
      }

      // If value is not a string, return the key
      if (typeof value !== 'string') {
        return key
      }

      // Interpolate params if provided
      if (params) {
        return interpolate(value, params)
      }

      return value
    }
  }, [locale])

  // Set locale and persist to localStorage
  const setLocale = (newLocale: SupportedLocale) => {
    setLocaleState(newLocale)
    localStorage.setItem('app-locale', newLocale)
  }

  // Check if current locale is RTL
  const isRTL = isRTLLanguage(locale)

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      isRTL,
    }),
    [locale, t, isRTL]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
