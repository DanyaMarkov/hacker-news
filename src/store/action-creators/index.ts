/* eslint-disable import/no-anonymous-default-export */
import * as NewsActionCreators from './news'
import * as NewsPageActionCreators from './newsPage'
import * as CommentActionCreators from './comment'
import * as ResponseActionCreators from './response'


export default {
    ...NewsActionCreators,
    ...NewsPageActionCreators,
    ...CommentActionCreators,
    ...ResponseActionCreators,
}