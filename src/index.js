import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from "./components/redux/store";
import { Provider } from 'react-redux'
import GlobalCSS from './components/styles/GlobalCss.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
            <GlobalCSS />
            <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


