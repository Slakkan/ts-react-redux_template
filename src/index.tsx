import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from "./router/router";

import "./styles.scss";
import { store } from './store/store';

const app = document.querySelector("#app");

ReactDOM.render(<Provider store={store}><Router /></Provider> , app);