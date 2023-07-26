
import './App.css';
import React from 'react';
import Nav from './components/header/Nav';
import Banner from './components/Banner/Banner';
import Rowpost from './components/ropost/Rowpost';
 import { action,Orginals,romance,horror,documentries,comedy,trending } from './urls';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Rowpost url={Orginals} title='Netflix Orginals'  />
      <Rowpost url={trending} title='Trending' isSmall  />
      <Rowpost url={action} title='Action Movies' isSmall />
      <Rowpost url={comedy} title='Comedy Movies' isSmall />
      <Rowpost url={romance} title='Romance Movies' isSmall />
      <Rowpost url={horror} title='Horror Movies' isSmall />
      <Rowpost url={documentries} title='Documenteries' isSmall />

    </div>
  );
}

export default App;
