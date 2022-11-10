import { CommentActionTypes } from './../types/comment';
import axios from 'axios';
import { Dispatch } from 'redux';
import { CommentAction } from '../types/comment';

export const fetchComments = (commentsIds:number[]) => {
    return async(dispatch:Dispatch<CommentAction>) => {
        try {
            dispatch({type: CommentActionTypes.FETCH_COMMENT})

            const responseComments = await Promise.all(
                commentsIds.map((commentID:number) => {
                    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${commentID}.json?print=pretty`).then((response) => response.data);
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