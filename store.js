const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;
//console.log(redux);

//actions

//action-types
//타입의 반복 작업 때문에 따로 변수로 정의를 해준다.
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT';
//TODO
const addSubscriber = () =>{
    return {
        type: ADD_SUBSCRIBER
    }
}
const addViewCount = () =>{
    return {
        type: ADD_VIEWCOUNT
    }
}

//reducers
const initialState = {
   subscribers : 365 
} //state초기값이 필요
const reducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_SUBSCRIBER:
            return {
                ...state,
                subscribers: state.subscribers +1
            }
    default: return state;
    }
}

const viewState = {
    viewCount: 0
}

const viewReducer = (state=viewState, action) => {
  switch(action.type){
    case ADD_VIEWCOUNT:
      return {
        ...state,
        viewCount: state.viewCount + 1
      }
    default: return state;
  }
}

const rootReducer = combineReducers({
  view: viewReducer,
  subscribe: reducer
})

//store
//const store = createStore(reducer);
const store = createStore(rootReducer);
//log 찍기
//const store = createStore(reducer, applyMiddleware(logger));

//console.log(store);
console.log(store.getState());

//subscribe - view - dispatch

store.subscribe(()=>{
    console.log('subscribe ==>>', store.getState())
})

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addViewCount());
store.dispatch(addViewCount());
store.dispatch(addViewCount());

console.log(store.getState());