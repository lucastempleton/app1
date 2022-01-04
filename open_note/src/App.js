
import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';

// components
import Editor from './components/Editor';
import NoAuthApp from './components/NoAuthApp';
import Homepage from './components/Homepage';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  
  useEffect(() => {
    
  })

  return (
    <div className="App high">
      App.js
      <Editor />
    </div>
  );
}

export default App;
