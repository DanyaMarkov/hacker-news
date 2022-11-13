import { ResponseActionTypes } from '../types/response';
import { Dispatch } from 'redux';
import { ResponseAction } from '../types/response';
import { API_URL } from '../../utils/const';

export const fetchResponses = (ResponsesIds:number[]) => {
    return async(dispatch:Dispatch<ResponseAction>) => {
        try {
            dispatch({type: ResponseActionTypes.FETCH_RESPONSE})

            const responseResponses = await Promise.all(
                ResponsesIds.map(async (responseID:number) => {
                    let response = await fetch(`${API_URL}/item/${responseID}.json?print=pretty`)
                    return await response.json();
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