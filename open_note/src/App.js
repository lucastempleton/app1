
import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import NotesList from './components/NotesList';

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
    <div className="App">
      <div className="login">
      My Username is: {currentUser.username}
      {console.log(currentUser)}
      <NotesList />
      </div>
    </div>
  );
}

export default App;
