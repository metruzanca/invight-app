import React from 'react'
import * as Localization from 'expo-localization'
import { IntlProvider } from "react-intl"

import en from './en.json'

type LanguagesDict = { [key: string]: any }

export const messages: LanguagesDict = {
  en,
}

// en-UK and en-US become en
const LOCAL_NO_REGION = Localization.locale.split(/[-_]/)[0]

export const LangProvider: React.FC = ({ children }) => {
  return (
    <IntlProvider
      locale={LOCAL_NO_REGION}
      defaultLocale="en"
      messages={messages[LOCAL_NO_REGION]}
    >
      {children}
    </IntlProvider>
  )
}