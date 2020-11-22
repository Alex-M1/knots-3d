import knotDescription from '../assets/knotsDescription.json'
import categories from '../assets/categories'
import clientLang from '../assets/clientLang'


const SET_KNOTS_BY_CATEGORIES = 'SET_KNOTS_CATEGORIES',
    GET_KNOTS_NUMBER = 'GET_KNOTS_NUMBER',
    SET_SEARCH_ITEM = 'SET_SEARCH_ITEM',
    SET_FAVOR_KNOTS = 'SET_FAVOR_KNOTS',
    SET_HEADER_NAME = 'SET_HEADER_NAME'


let pathnameNum = +window.location.pathname.split('_')[2]


const initialState = {
    knotDescription: knotDescription,
    categories: categories,
    knotsCode: 'all',
    knotNumber: knotDescription[pathnameNum - 1],
    search: null,
    searchInput: '',
    favorKnots: localStorage.length
}

const knots = (state = initialState, action) => {
    switch (action.type) {
        case GET_KNOTS_NUMBER: {
            return {
                ...state,
                knotNumber: action.knotNumber
            }
        }
        case SET_KNOTS_BY_CATEGORIES:
            return {
                ...state,
                knotsCode: action.knotsCode
            }
        case SET_SEARCH_ITEM:
            return {
                ...state,
                search: action.search,
                searchInput: action.searchInput

            }
        case SET_FAVOR_KNOTS:
            return {
                ...state,
                favorKnots: action.like
            }
        case SET_HEADER_NAME:
            return {
                ...state,
                header: action.knotNumber === '/' ? 'KNOTS 3D'
                    : knotDescription[action.knotNumber - 1][`knotenname_${action.lang}`].split('_')[0]
            }
        default:
            return state
    }
}
export default knots


//actions
export const setKnotsByCategories = knotsCode => ({ type: SET_KNOTS_BY_CATEGORIES, knotsCode })
export const getKnotsNumber = knotNumber => ({ type: GET_KNOTS_NUMBER, knotNumber })
export const getSearchItem = (search, searchInput) => ({ type: SET_SEARCH_ITEM, search, searchInput })
export const setFavorKnots = like => ({ type: SET_FAVOR_KNOTS, like })
export const setHeaderName = (lang, knotNumber) => ({ type: SET_HEADER_NAME, lang, knotNumber })