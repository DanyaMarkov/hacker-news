import { NewsPageAction, NewsPageActionTypes, NewsPageState } from "../types/newsPage"

const initialState : NewsPageState = {
    currentNews: {},
    comments: [],
    loading: false,
    error: null,
}


export const newsPageReducer = (state = initialState, action: NewsPageAction): NewsPageState => {
    switch(action.type) {
        case NewsPageActionTypes.FETCH_NEWS_PAGE:
            return({
                loading: true, 
                currentNews: {}, 
                comments: [], 
                error: null
            })
        case NewsPageActionTypes.FETCH_NEWS_PAGE_SUCCESS:
            return({
                loading: false,  
                currentNews: action.payload, 
                comments: [], 
                error: null
            })
        case NewsPageActionTypes.FETCH_NEWS_PAGE_ERROR:
            return({
                loading: false,  
                currentNews: {}, 
                comments: [], 
                error: action.payload
            })
        
        default:
            return state
    }
}