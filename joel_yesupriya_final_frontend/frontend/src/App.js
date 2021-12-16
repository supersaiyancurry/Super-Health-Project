import React from 'react';
import logo from './logo.svg';


import './App.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store.js';


function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Routes />
            </Provider>
        </div>
    );
}

export default App;
