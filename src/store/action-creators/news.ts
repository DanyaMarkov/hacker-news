import { Dispatch } from 'redux';
import { API_URL } from '../../utils/const';
import { NewsAction, NewsActionTypes } from './../types/news';

export const fetchNews = () => {
    return async(dispatch:Dispatch<NewsAction>) => {
        try {
            dispatch({type: NewsActionTypes.FETCH_NEWS})

            const responseNewStoriesIds = await fetch(`${API_URL}/newstories.json?print=pretty`)
            
            let storiesIds = await responseNewStoriesIds.json()
            //Берём 100 элементов
            storiesIds = storiesIds.slice(0, 100)

            const responseStories = await Promise.all(
                storiesIds.map(async (storieId:number) => {
                    let response = await fetch(`${API_URL}/item/${storieId}.json?print=pretty`)
                    return await response.json();
                })
              );

            dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: responseStories})
        }
        catch (e){
            dispatch({
                type: NewsActionTypes.FETCH_NEWS_ERROR, 
                payload: "Произошла ошибка при загрузке новостей"
            })

        }
    }
}