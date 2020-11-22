import knots from "./knots"
import languages from "./lang"
const { combineReducers, createStore } = require("redux");

let reducers = combineReducers({
    knots: knots,
    languages: languages
})
let store = createStore(reducers)
export default store