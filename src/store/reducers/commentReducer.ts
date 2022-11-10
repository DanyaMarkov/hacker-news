import { CommentAction, CommentActionTypes, CommentState } from './../types/comment';

const initialState : CommentState = {
    loading: false,
    currentComments: [],
    error: null
}

export const commenteReducer = (state = initialState, action: CommentAction): CommentState => {
    switch(action.type) {
        case CommentActionTypes.FETCH_COMMENT:
            return({
                loading: true, 
                currentComments: [],
                error: null
            })
        case CommentActionTypes.FETCH_COMMENT_SUCCESS:
            return({
                loading: false, 
                currentComments: action.payload,
                error: null
            })
        case CommentActionTypes.FETCH_COMMENT_ERROR:
            return({
                loading: false, 
                currentComments: [],
                error: action.payload
            })
        
        default:
            return state
    }
}