import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/** 
install RexuxToolKit, react-redux
Структура папок
redux
- store

Configure Store

В indexe.js імпорт Provider, store
обгортаємо App в Provider 

Створюємо Slice у slice.js
В якому створюємо редюсери і екшени

Додаємо редюсер у стор store.js

В компоненті додаємо useSelector, useDispatch та екшени 
useSelector отримує частину стору
useDispatch метод надсилання екшену

*/
