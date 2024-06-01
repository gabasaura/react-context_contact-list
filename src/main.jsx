import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import AppContextProvider from './store/AppContext'; // Import the Context Provider
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
);