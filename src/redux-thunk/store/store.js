import { applyMiddleware, createStore,combineReducers} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "../reducer/rootReducer";
import { counterReducer } from "../reducer/counterReducer";



const reducers =combineReducers({
 count: counterReducer,
rootReducer,


})


export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);











