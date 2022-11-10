export interface CommentState {
    // currentComments: DataNode,
    currentComments: any[],
    loading: boolean,
    error: null | string
}

export enum CommentActionTypes {
    FETCH_COMMENT = "FETCH_COMMENT",
    FETCH_COMMENT_SUCCESS = "FETCH_COMMENT_SUCCESS",
    FETCH_COMMENT_ERROR = "FETCH_COMMENT_ERROR"
}

export type CommentAction = FetchCommentAction | FetchCommentSuccessAction | FetchCommentErrorAction

interface FetchCommentAction {
    type: CommentActionTypes.FETCH_COMMENT;
}
interface FetchCommentSuccessAction {
    type: CommentActionTypes.FETCH_COMMENT_SUCCESS;
    payload: any[];
}
interface FetchCommentErrorAction {
    type: CommentActionTypes.FETCH_COMMENT_ERROR;
    payload: string;
}
