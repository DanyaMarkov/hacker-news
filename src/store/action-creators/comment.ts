import { CommentActionTypes } from './../types/comment';
import axios from 'axios';
import { Dispatch } from 'redux';
import { CommentAction } from '../types/comment';

interface DataNode {
    by: string;
    time: number;
    text: string;
    kids: [];
}

export const fetchComments = (commentsIds:number[]) => {
    return async(dispatch:Dispatch<CommentAction>) => {
        try {
            dispatch({type: CommentActionTypes.FETCH_COMMENT})

            let response:DataNode[] = []
            for (let commentID of commentsIds) {
                let comment = (await axios.get(`https://hacker-news.firebaseio.com/v0/item/${commentID}.json?print=pretty`))
                response.push(comment.data)
            }
            // console.log(response)
            response.sort((a: any, b: any) => b.time - a.time)

            dispatch({type: CommentActionTypes.FETCH_COMMENT_SUCCESS, payload: response})
        }
        catch (e){
            dispatch({
                type: CommentActionTypes.FETCH_COMMENT_ERROR, 
                payload: "Произошла ошибка при загрузке комментария"
            })

        }
    }
}