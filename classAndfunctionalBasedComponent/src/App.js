// import React, {Component} from 'react';
import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import Search from './components/users/Search';

import './App.css';
import axios from 'axios';


// Class based component
// https://github.com/bushblade/RFTB2019_GitHub_Finder/tree/refactor#updates-since-course-published

class App extends React.Component {

  state = {
    users: [],
    loading: false
  }

  // Render and componentDidMount are lifecyle method


  // async componentDidMount(){

  //   this.setState({loading:true});

  // const github = axios.create({
  //   baseURL: 'https://api/github.com',
  //   timeout: 1000,
  //   headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN}
  // })

  //   const res = await github.get('https://api.github.com/users');

    
  //   this.setState({users: res.data, loading: false});
  // }

    // Search Github Users
  // searchUsers = text => {
  //   console.log(text);
  // }

  searchUsers = async text => {

    this.setState({loading:true});

    const github = axios.create({
      baseURL: 'https://api/github.com',
      timeout: 1000,
      headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN}
    })

    const res = await github.get(`https://api.github.com/search/users?q=${text}`);

    
    this.setState({users: res.data.items, loading: false});
  }

  render() {
    return (
      <div className='App'>
       <Navbar title='Github Finder' icon='fab fa-github'/>
       <div className="container">
        <Search searchUsers={this.searchUsers}/>
        <Users loading={this.state.loading} users={this.state.users} />
       </div>
      </div>
    );
  }
}



export default App;
