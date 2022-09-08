import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBaoundary from '../components/ErrorBaoundary';
import './App.css';

function App() {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [count, setCount] = useState(0)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> {setRobots(users)});
  }, [count])


  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }
  const filteredRobots= robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <button onClick={()=>setCount(count+1)}>Click Me!</button>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBaoundary>
            <CardList robots={filteredRobots} />
          </ErrorBaoundary>
        </Scroll>
      </div>
    ); 
}

export default App;

/* class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({robots: users}));
  } */