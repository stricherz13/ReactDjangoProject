import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {CssBaseline} from "@mui/material";

// Components
import Home from "./Components/home";
import Login from "./Components/login";
import Listings from "./Components/listings";
import Header from "./Components/Header";


function App() {

    return (
        <BrowserRouter>
            <CssBaseline/>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/listings' element={<Listings/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
