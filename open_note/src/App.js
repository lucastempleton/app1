
import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import NoAuthApp from './components/NoAuthApp';
import Homepage from './components/Homepage'

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function login(){
    setIsLoggedIn(true)
  }
  function logout(){
    console.log('Before:'+isLoggedIn)
    setIsLoggedIn(false)
    console.log('button clicked')
    console.log('After:', isLoggedIn)
  }
  return (
  
      <div>
      {isLoggedIn ?  <Homepage logout={logout}/> : <NoAuthApp login={login}/> }
      </div>
   
  );
}

export default App;
