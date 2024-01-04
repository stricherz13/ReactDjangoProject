import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Components
import Home from "./Components/home";
import Login from "./Components/login";
import Listings from "./Components/listings";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/listings' element={<Listings />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
