import axios from 'axios';
import { Dispatch } from 'redux';
import { NewsPageAction, NewsPageActionTypes } from '../types/newsPage';

export const fetchNewsInformation = (id:number) => {
    return async(dispatch:Dispatch<NewsPageAction>) => {
        try {
            dispatch({type: NewsPageActionTypes.FETCH_NEWS_PAGE})
            let news = (await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`))

            dispatch({type: NewsPageActionTypes.FETCH_NEWS_PAGE_SUCCESS, payload: news.data})
            
        }
        catch (e){
            dispatch({
                type: NewsPageActionTypes.FETCH_NEWS_PAGE_ERROR, 
                payload: "Произошла ошибка при загрузке новости"
            })

        }
    }
}