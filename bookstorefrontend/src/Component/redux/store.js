 import { createStore, combineReducers, applyMiddleware } from 'redux'
 import thunk from 'redux-thunk'
 import getBooks from '../redux/reducers/reducers'

 const reducers = combineReducers({
     Books: getBooks
 })

 const store = createStore(reducers, (applyMiddleware(thunk)));


 export default store;