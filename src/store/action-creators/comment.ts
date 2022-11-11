import { CommentActionTypes } from './../types/comment';
import { Dispatch } from 'redux';
import { CommentAction } from '../types/comment';
import { API_URL } from '../../utils/const';

export const fetchComments = (commentsIds:number[]) => {
    return async(dispatch:Dispatch<CommentAction>) => {
        try {
            dispatch({type: CommentActionTypes.FETCH_COMMENT})

            const responseComments = await Promise.all(
                commentsIds.map((commentID:number) => {
                    return fetch(`${API_URL}/item/${commentID}.json?print=pretty`).then((response) => response.json());
                })
            );

            responseComments.sort((a: any, b: any) => b.time - a.time)

            dispatch({type: CommentActionTypes.FETCH_COMMENT_SUCCESS, payload: responseComments})
        }
        catch (e){
            dispatch({
                type: CommentActionTypes.FETCH_COMMENT_ERROR, 
                payload: "Произошла ошибка при загрузке комментария"
            })
        }
    }
}