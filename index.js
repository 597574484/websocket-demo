import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from './stores/';
import {App} from './containers/';

var store = createStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root'));