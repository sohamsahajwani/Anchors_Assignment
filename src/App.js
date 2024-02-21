import Login from "./components/Login";
import Profile from "./components/Profile";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import Internship from "./components/Internship";

function App() {
  return (
    <div>
      <UserProvider>
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/internship" element={<Internship/>} />
        </Routes>
      </div>
    </Router>
    </UserProvider>
    </div>
  );
}

export default App;
