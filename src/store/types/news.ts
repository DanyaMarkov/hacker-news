
export interface NewsState {
    newsList: any[],
    loading: boolean,
    error: null | string
}

export enum NewsActionTypes {
    FETCH_NEWS = "FETCH_NEWS",
    FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
    FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR"
}


export type NewsAction = FetchNewsAction | FetchNewsSuccessAction | FetchNewsErrorAction



interface FetchNewsAction {
    type: NewsActionTypes.FETCH_NEWS;
}
interface FetchNewsSuccessAction {
    type: NewsActionTypes.FETCH_NEWS_SUCCESS;
    payload: any[];
}
interface FetchNewsErrorAction {
    type: NewsActionTypes.FETCH_NEWS_ERROR;
    payload: string;
}

// const FETCH_NEWS = "FETCH_NEWS";
// const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
// // const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";



// interface NewsAction {
//     type: string,
//     payload: any[],
// }
