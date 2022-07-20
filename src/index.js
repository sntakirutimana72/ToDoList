import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import $getById from './utils/dom-utils';

import './index.css';

const root = ReactDOM.createRoot($getById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
