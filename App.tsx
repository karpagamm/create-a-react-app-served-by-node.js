import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div>About</div>
    );
};

const Home: React.FC = () => {
    return (
        <div>Home</div>
    );
};

const News: React.FC = () => {
    return (
        <div>News</div>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/news">News</Link>
                <br />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
