import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <h1>Hello, PWA Biochip Project!</h1>
    </React.StrictMode>
)