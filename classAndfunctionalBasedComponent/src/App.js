// import React, {Component} from 'react';
import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'

import './App.css';
import axios from 'axios';


// Class based component


class App extends React.Component {

  state = {
    users: [],
    loading: false
  }

  // Render and componentDidMount are lifecyle method


  async componentDidMount(){

  const github = axios.create({
    baseURL: 'https://api/github.com',
    timeout: 1000,
    headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN}
  })

    this.setState({loading:true});

    const res = await github.get('https://api.github.com/users');

    
    this.setState({users: res.data, loading: false});
  }

  render() {
    return (
      <div className='App'>
       <Navbar title='Github Finder' icon='fab fa-github'/>
       <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
       </div>
      </div>
    );
  }
}



export default App;
