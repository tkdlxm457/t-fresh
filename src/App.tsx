import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './pages/@layout/AppLayout';
import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    );
};

export default App;
