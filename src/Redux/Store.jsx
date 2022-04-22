
import {combineReducers} from "redux";

import {createStore} from 'redux'
import { tableReducer } from "./Reducer/TableReducer";

const rootReducers = combineReducers(
    {
        table:tableReducer
    }
)

export const store = createStore(rootReducers);