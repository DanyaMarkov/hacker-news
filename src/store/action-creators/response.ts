import { ResponseActionTypes } from '../types/response';
import axios from 'axios';
import { Dispatch } from 'redux';
import { ResponseAction } from '../types/response';

interface DataNode {
    by: string;
    time: number;
    text: string;
    kids: [];
}

export const fetchResponses = (ResponsesIds:number[]) => {
    return async(dispatch:Dispatch<ResponseAction>) => {
        try {
            dispatch({type: ResponseActionTypes.FETCH_RESPONSE})


            let response:DataNode[] = []
            for (let ResponseID of ResponsesIds) {
                let Response = (await axios.get(`https://hacker-news.firebaseio.com/v0/item/${ResponseID}.json?print=pretty`))

                response.push(Response.data)
            }

            response.sort((a: any, b: any) => b.time - a.time)

           
            dispatch({type: ResponseActionTypes.FETCH_RESPONSE_SUCCESS, payload: response})    
        }
        catch (e){
            dispatch({
                type: ResponseActionTypes.FETCH_RESPONSE_ERROR, 
                payload: "Произошла ошибка при загрузке комментария"
            })

        }
    }
}