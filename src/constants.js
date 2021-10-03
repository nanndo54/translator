const languages = [
  'ar-eg',
  'ar-sa',
  'bg-bg',
  'ca-es',
  'zh-cn',
  'zh-hk',
  'zh-tw',
  'hr-hr',
  'cs-cz',
  'da-dk',
  'nl-be',
  'nl-nl',
  'en-au',
  'en-ca',
  'en-gb',
  'en-in',
  'en-ie',
  'en-us',
  'fi-fi',
  'fr-ca',
  'fr-fr',
  'fr-ch',
  'de-at',
  'de-de',
  'de-ch',
  'el-gr',
  'he-il',
  'hi-in',
  'hu-hu',
  'id-id',
  'it-it',
  'ja-jp',
  'ko-kr',
  'ms-my',
  'nb-no',
  'pl-pl',
  'pt-br',
  'pt-pt',
  'ro-ro',
  'ru-ru',
  'sk-sk',
  'sl-si',
  'es-mx',
  'es-es',
  'sv-se',
  'ta-in',
  'th-th',
  'tr-tr',
  'vi-vn'
]

const options = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    'x-rapidapi-key': process.env.TRANSLATE_API_URL
  }
}

const languageNames = new Intl.DisplayNames(['es'], { type: 'language' })

const TRANSLATE_API_URL = 'https://google-translate1.p.rapidapi.com/language/translate/v2'

export { options, languageNames, languages, TRANSLATE_API_URL }
