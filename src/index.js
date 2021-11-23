import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './components/MainPage';
import {store} from './store';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import ScrollButton from "./components/ScrollTop";
import ScrollTopOnReload from "./components/ScrollTopOnReload";
import Amplify from 'aws-amplify';
import config from './aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';
Amplify.configure(config);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ScrollTopOnReload/>
                <MainPage/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
