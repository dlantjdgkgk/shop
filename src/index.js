import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const defaultValue = [
    { id: 0, name: '멋진신발', quan: 2 },
    { id: 1, name: '멋진신발2', quan: 5 },
];

const reducer = (state = defaultValue, action) => {
    if (action.type === 'addOption') {
        const copy = [...state];
        copy.push(action.payload);
        console.log(copy);
        return copy;
    } else if (action.type === 'plus') {
        const copy = [...state];
        copy[action.payload].quan++;
        return copy;
    } else if (action.type === 'minus') {
        const copy = [...state];
        copy[action.payload].quan--;
        return copy;
    } else {
        return state;
    }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
