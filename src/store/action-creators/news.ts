import axios from 'axios';
import { Dispatch } from 'redux';
import { NewsAction, NewsActionTypes } from './../types/news';

export const fetchNews = () => {
    return async(dispatch:Dispatch<NewsAction>) => {
        try {
            dispatch({type: NewsActionTypes.FETCH_NEWS})

            const newStoriesIds = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty').then((response) => response.data)
            
            //Берём 100 элементов
            const storiesIds = newStoriesIds.slice(0, 100);

            const responseStories = await Promise.all(
                storiesIds.map((storieId:number) => {
                    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${storieId}.json?print=pretty`).then((response) => response.data);
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