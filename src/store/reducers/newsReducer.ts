import { NewsAction, NewsActionTypes, NewsState } from "../types/news"

const initialState : NewsState = {
    newsList: [],
    loading: false,
    error: null,
}


export const newsReducer = (state = initialState, action: NewsAction): NewsState => {
    switch(action.type) {
        case NewsActionTypes.FETCH_NEWS:
            return({
                loading: true, 
                newsList: [], 
                error: ""
            })
        case NewsActionTypes.FETCH_NEWS_SUCCESS:
            return({
                loading: false,  
                newsList: action.payload, 
                error: ""
            })
        case NewsActionTypes.FETCH_NEWS_ERROR:
            return({
                loading: false,  
                newsList: [], 
                error: action.payload
            })
        
        default:
            return state
    }
}