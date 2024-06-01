import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'; // Import the Navbar
import AddContact from './pages/AddContact';

const App = () => {
    return (
        <Router>
            <Navbar /> {/* Use the Navbar here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addcontact" element={<AddContact />} />
            </Routes>
        </Router>
    );
};

export default App;