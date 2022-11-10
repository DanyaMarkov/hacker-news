// import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as NewsActionCreators from './../store/action-creators/news'

// export const useActions = () => {
//     const dispatch = useDispatch()
//     return bindActionCreators(NewsActionCreators, dispatch)
// }

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from './../store/action-creators/'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
    // return bindActionCreators(NewsPageActionCreators, dispatch)
    // return bindActionCreators(NewsPageActionCreators, dispatch)
}