
import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD

// components
import Editor from './components/Editor';
import NoAuthApp from './components/NoAuthApp';
import Homepage from './components/Homepage';
=======
import NotesList from './components/NotesList';
>>>>>>> 6a788b58e0c9e555e02315d9315a9e86cb421650

function App() {
  const [currentUser, setCurrentUser] = useState({});
  
  
  useEffect(() => {
    fetch('http://localhost:3000/currentUser')
    .then(res => res.json())
    .then(user => {
      console.log(currentUser)
      setCurrentUser(user)
    }
    )
  },[])

  return (
<<<<<<< HEAD
    <div className="App high">
      App.js
      <Editor />
=======
    <div className="App">
      <div className="login">
      My Username is: {currentUser.username}
      {console.log(currentUser)}
      <NotesList />
      </div>
>>>>>>> 6a788b58e0c9e555e02315d9315a9e86cb421650
    </div>
  );
}

export default App;
