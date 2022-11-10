import { commenteReducer } from './commentReducer';
import { newsPageReducer } from './newsPageReducer';
import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { ResponseeReducer } from './responseReducer';

export const rootReducer = combineReducers({
    news: newsReducer,
    newsPage: newsPageReducer,
    comment: commenteReducer,
    response: ResponseeReducer,
})

export type RootState = ReturnType<typeof rootReducer> 