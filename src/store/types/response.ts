export interface ResponseState {
    // currentResponses: DataNode,
    currentResponses: any[],
    loading: boolean,
    error: null | string
}

export enum ResponseActionTypes {
    FETCH_RESPONSE = "FETCH_RESPONSE",
    FETCH_RESPONSE_SUCCESS = "FETCH_RESPONSE_SUCCESS",
    FETCH_RESPONSE_ERROR = "FETCH_RESPONSE_ERROR"
}

export type ResponseAction = FetchResponseAction | FetchResponseSuccessAction | FetchResponseErrorAction

interface FetchResponseAction {
    type: ResponseActionTypes.FETCH_RESPONSE;
}
interface FetchResponseSuccessAction {
    type: ResponseActionTypes.FETCH_RESPONSE_SUCCESS;
    payload: any[];
}
interface FetchResponseErrorAction {
    type: ResponseActionTypes.FETCH_RESPONSE_ERROR;
    payload: string;
}
