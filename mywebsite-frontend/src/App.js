import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My Website</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<Protected />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

