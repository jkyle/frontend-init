import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './root-reducer';
import App from './components/app.js';
import '@common/styles/global.styl';

const store = createStore(rootReducer);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
