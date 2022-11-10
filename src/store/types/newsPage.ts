export interface NewsPageState {
    currentNews: any,
    comments: any[],
    loading: boolean,
    error: null | string
}

export enum NewsPageActionTypes {
    FETCH_NEWS_PAGE = "FETCH_NEWS_PAGE",
    FETCH_NEWS_PAGE_SUCCESS = "FETCH_NEWS_PAGE_SUCCESS",
    FETCH_NEWS_PAGE_ERROR = "FETCH_NEWS_PAGE_ERROR"
}

export type NewsPageAction = FetchNewsPageAction | FetchNewsPageSuccessAction | FetchNewsPageErrorAction

interface FetchNewsPageAction {
    type: NewsPageActionTypes.FETCH_NEWS_PAGE;
}
interface FetchNewsPageSuccessAction {
    type: NewsPageActionTypes.FETCH_NEWS_PAGE_SUCCESS;
    payload: object;
}
interface FetchNewsPageErrorAction {
    type: NewsPageActionTypes.FETCH_NEWS_PAGE_ERROR;
    payload: string;
}
