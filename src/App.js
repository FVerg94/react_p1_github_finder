import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search'

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // Runs when the component is built the first time
  async componentDidMount() {
    // Loading data
    this.setState({ loading: true });
    // Extract data from API
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // After data extraction, save in state and loading is false
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search></Search>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;
