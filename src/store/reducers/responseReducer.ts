import { ResponseAction, ResponseActionTypes, ResponseState } from '../types/response';


const initialState : ResponseState = {
    loading: false,
    currentResponses: [],
    error: null
}

export const ResponseeReducer = (state = initialState, action: ResponseAction): ResponseState => {
    switch(action.type) {
        case ResponseActionTypes.FETCH_RESPONSE:
            return({
                loading: true, 
                currentResponses: [],
                error: null
            })
        case ResponseActionTypes.FETCH_RESPONSE_SUCCESS:
            return({
                loading: false, 
                currentResponses: action.payload,
                error: null
            })
        case ResponseActionTypes.FETCH_RESPONSE_ERROR:
            return({
                loading: false, 
                currentResponses: [],
                error: action.payload
            })
        
        default:
            return state
    }
}