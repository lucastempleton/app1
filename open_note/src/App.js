import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Notes from './components/Notes';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import $ from 'jquery'; // ignore

function App() {
  const currentUserDummy = {
    // never store impertinent data like creation dates, or anything that could compromise user data
    id: uuidv4(),
    username: 'username',
    password: 'password',
    userCreated: Date.now(),
  }

  const [ currentUser, setCurrentUser ] = useState(currentUserDummy) // the argument {} serves as an initial state incase no auth'd user
  const [ notes, setNotes ] = useState({});

  useEffect(() => {
    // side effects
    console.log('useEffect() called');
  }, [ currentUser, notes ]);

  return (
    <div className="App">
      <Link to="/notes">Notes</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/data">Data</Link> 
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/settings" element={<div>settings</div>} />
        <Route path="/data" element={<div>data</div>} />
      </Routes>
    </div>
  );
};

export default [ App, getUserAuthState ];
