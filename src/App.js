import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robots } from './Robots';


const App = () => {
  return(
    <div>
    <h1>RoboFriends</h1>
    <SearchBox />
    <CardList Robots={Robots}/>
    </div>
  );
}

export default App;
