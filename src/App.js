// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/navbar/NavBar';
import { action,originals } from './urls'
// import {Route,Routes} from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { useState } from 'react' 



function App() {
  const [state,setState] = useState([])

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost  url={action} title='Action' isSmall />
      <RowPost  url={action} title='Action' isSmall />
      
    </div>
  );
}

export default App;