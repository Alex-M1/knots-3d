const userLang = navigator.language,
    substr = userLang.substring(0, 2)

let clientLang = ''
if (substr === 'ru' || substr === 'uk') clientLang = 'ru'
else if (substr === 'de') clientLang = 'de'
else if (substr === 'es') clientLang = 'esp'
else if (substr === 'it') clientLang = 'it'
else if (substr === 'fr') clientLang = 'fr'
else if (substr === 'tr') clientLang = 'tuek'
else clientLang = 'eng'

export default clientLang