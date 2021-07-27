import React from 'react'
import * as Localization from 'expo-localization'
import { IntlProvider } from "react-intl"

// intl polyfill and local-data for english
import 'intl';
import 'intl/locale-data/jsonp/en';
// TODO maybe pass to i18n instead https://docs.expo.io/versions/latest/sdk/localization/

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