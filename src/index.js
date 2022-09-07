import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

const store=createStore(rootReducer, compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
  ))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
    
    


