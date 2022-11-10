import { ResponseActionTypes } from '../types/response';
import axios from 'axios';
import { Dispatch } from 'redux';
import { ResponseAction } from '../types/response';

export const fetchResponses = (ResponsesIds:number[]) => {
    return async(dispatch:Dispatch<ResponseAction>) => {
        try {
            dispatch({type: ResponseActionTypes.FETCH_RESPONSE})

            const responseResponses = await Promise.all(
                ResponsesIds.map((responseID:number) => {
                    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${responseID}.json?print=pretty`).then((response) => response.data);
                })
            );

            responseResponses.sort((a: any, b: any) => b.time - a.time)

            dispatch({type: ResponseActionTypes.FETCH_RESPONSE_SUCCESS, payload: responseResponses})    
        }
        catch (e){
            dispatch({
                type: ResponseActionTypes.FETCH_RESPONSE_ERROR, 
                payload: "Произошла ошибка при загрузке комментария"
            })
        }
    }
}