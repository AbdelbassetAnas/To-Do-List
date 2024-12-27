import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import HomePage from './pages/HomePage';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;