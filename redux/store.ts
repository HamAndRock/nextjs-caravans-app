import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {caravansReducer} from "./reducers/caravansReducer";

export const rootReducer = combineReducers({
    caravans: caravansReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
