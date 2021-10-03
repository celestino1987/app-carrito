import { applyMiddleware, createStore,combineReducers} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "../reducer/rootReducer";




const reducers =combineReducers({
 
rootReducer,


})


export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);











