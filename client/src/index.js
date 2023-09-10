import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./Component/App"
import { ChakraProvider } from '@chakra-ui/react'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import rootReducer from "./services/reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(logger));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);
