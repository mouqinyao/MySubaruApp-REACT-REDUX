import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import {Provider} from 'react-redux';
import store from '~/Store.js';

import App from '~/components/App.jsx';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter >
		  <App/>
		</BrowserRouter>
	</Provider>,
    document.getElementById('root')
);


