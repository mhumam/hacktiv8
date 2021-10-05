import { applyMiddleware, createStore } from "redux"
import reducer from "store/reducers"
import logger from "redux-logger"
import thunk from "redux-thunk"

export const store = createStore(reducer, applyMiddleware(logger, thunk))
export default store
