import React,{ Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { Robots } from './Robots';
import Scroll from '../components/Scroll';
import './App.css';


// const state = {
//   Robots: Robots,
//   searchfield: ''
// }
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
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json()).then(users => {this.setState({ Robots: users})});

  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
    // console.log(event.target.value);

  }

  render() {
    const { Robots, searchfield } = this.state;
        const filteredRobots = Robots.filter(Robots =>{
          return Robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !Robots.length ?
          <h1>Loading</h1> :
          (
            <div className='tc'>
              <h1 className='f1'>RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <CardList Robots={filteredRobots} />
              </Scroll>
            </div>
          );
      }
    }


export default App;
