import axios from 'axios';
import { Dispatch } from 'redux';
import { NewsAction, NewsActionTypes } from './../types/news';



export const fetchNews = () => {
    return async(dispatch:Dispatch<NewsAction>) => {
        try {
            dispatch({type: NewsActionTypes.FETCH_NEWS})
            const newStories = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
            
            let response = []
            for (let idNews of newStories.data) {
                let news = (await axios.get(`https://hacker-news.firebaseio.com/v0/item/${idNews}.json?print=pretty`))
                response.push(news.data)

                if (response.length === 100) {
                    break
                }
            }

            // console.log(response)
            dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: response})


            // const responseMaxItem = await axios.get('https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty')
            
            // let response = []
            // for (let i = responseMaxItem.data; responseMaxItem.data - i < 10; i--) {
            //     let news = (await axios.get(`https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`))
            //     response.push(news.data)
            // }
            // let k = 0;
            // while (k < 10) {
            //     let i = responseMaxItem.data;

            //     let news = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`)

            //     if (news.data.type !== "comment" ) {
            //     // if (news.data.type === "story" || "ask" || "job" || "poll") {
            //         k++;
            //         response.push(news.data)
            //     } 
            //     i--;
            // }

            // for (let i = responseMaxItem.data; responseMaxItem.data - i < 10; i--) {
            //     let news = (await axios.get(`https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`))
            //     response.push(news.data)
            // }
            
        }
        catch (e){
            dispatch({
                type: NewsActionTypes.FETCH_NEWS_ERROR, 
                payload: "Произошла ошибка при загрузке новостей"
            })

        }
    }
}