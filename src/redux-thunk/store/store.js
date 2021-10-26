import { applyMiddleware, createStore,combineReducers} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "../reducer/rootReducer";
import { modalReducer } from "../reducer/modalReducer";
import { modalChangeReducer } from "../reducer/modalChangeReducer";
import { loadingReducer } from "../reducer/loadingReducer";




const reducers =combineReducers({
 
rootReducer,
modalReducer,
modalChangeReducer,
loadingReducer


})


export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);











