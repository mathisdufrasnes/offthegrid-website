import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { News, Notes } from './models';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

function App() {
    let binary=true;
    const [actualites, setActualites] = useState([]);
    async function fetchNewsSearch() {
        const models = await DataStore.query(News);
        setActualites(models);
    }
    useEffect(() =>{
        if(binary)
        {
            fetchNewsSearch();
            console.log(actualites);
            binary=false;
        }
    })
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello from V2</h1>
        </header>
      </div>
  );
}

export default App;
