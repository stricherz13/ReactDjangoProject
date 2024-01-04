import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h1>This is the homepage</h1>}/>
                <Route path='/login' element={<h1>This is the login page</h1>}/>
                <Route path='/listings' element={<h1>This is the property listing page</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
