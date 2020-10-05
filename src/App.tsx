import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRoot from './AppRoot';

function App() {
  return (
    <Provider store={store}>
      <AppRoot />
    </Provider>
  );
}

export default App;
