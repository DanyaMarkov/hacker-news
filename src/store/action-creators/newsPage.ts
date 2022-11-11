import { Dispatch } from 'redux';
import { API_URL } from '../../utils/const';
import { NewsPageAction, NewsPageActionTypes } from '../types/newsPage';

export const fetchNewsInformation = (id:number) => {
    return async(dispatch:Dispatch<NewsPageAction>) => {
        try {
            dispatch({type: NewsPageActionTypes.FETCH_NEWS_PAGE})

            let news = await fetch(`${API_URL}/item/${id}.json?print=pretty`).then((response) => response.json())

            dispatch({type: NewsPageActionTypes.FETCH_NEWS_PAGE_SUCCESS, payload: news})
            
        }
        catch (e){
            dispatch({
                type: NewsPageActionTypes.FETCH_NEWS_PAGE_ERROR, 
                payload: "Произошла ошибка при загрузке новости"
            })

        }
    }
}