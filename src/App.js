import React,{ Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robots } from './Robots';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // Robots: Robots,
      Robots: [],
      searchfield: ''
    }
    console.log('1');
  }

  componentDidMount() {
  this.setState({Robots:Robots});
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
    // console.log(event.target.value);

  }

  render() {
    const filteredRobots = this.state.Robots.filter(Robots => {
      return Robots.name.toLowerCase().includes(this.searchfield.toLowerCase());
    } )
    return(
      <div className='tc'>
      <h1 className='f2'>RoboFriends</h1>
      <SearchBox  SearchChange={this.onSearchChange}/>
      <CardList Robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
