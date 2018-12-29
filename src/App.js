import React,{ Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { Robots } from './Robots';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // Robots: Robots,
      Robots: [],
      searchfield: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
    .then(users =>
      this.setState({Robots: users}));

  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
    // console.log(event.target.value);

  }

  render() {
    const filteredRobots = this.state.Robots.filter(Robots => {
      return Robots.name.toLowerCase().includes(this.searchfield.toLowerCase());
    } )

    if (this.state.robots.length === 0){
      return <h1>Loading</h1>
    } else {
    return(
      <div className='tc'>
      <h1 className='f2'>RoboFriends</h1>
      <SearchBox  SearchChange={this.onSearchChange}/>
      <Scroll>
      <CardList Robots={filteredRobots}/>
    </Scroll>
  </div>

    );
  }
  }
}

export default App;
