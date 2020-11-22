import clientLang from '../assets/clientLang'
import staticLocalisation from '../assets/staticLocalisation.json'
import appLang from '../assets/languages.json'

const SET_LANGUAGE = 'SET_LANGUAGE'




const initialState = {
    appLang,
    langCode: clientLang,
    staticLocalisation: staticLocalisation
}

const languages = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                langCode: action.lang
            }
        default:
            return state
    }
}
export default languages
export const setLang = (lang) => ({ type: SET_LANGUAGE, lang })