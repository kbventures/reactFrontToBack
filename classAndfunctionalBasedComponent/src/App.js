// import React, {Component} from 'react';
// https://github.com/bradtraversy/github-finder
import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import './App.css';
import axios from 'axios';


// Class based component
// https://github.com/bushblade/RFTB2019_GitHub_Finder/tree/refactor#updates-since-course-published

class App extends React.Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }


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


    // Clear users from state
  clearUsers = () => this.setState({users: [], loading: false});

  setAlert = (msg, type) => {
    this.setState({alert:{msg, type}});

    setTimeout(() => this.setState({ alert: null}), 5000);
  };
  

  render() {

    const { users, loading} = this.state;

    return (
      <div className='App'>
       <Navbar title='Github Finder' icon='fab fa-github'/>
       <div className="container">
       <Alert alert={this.state.alert}/>
        <Search 
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers} 
          showClear={
          this.state.users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <Users loading={loading} users={users} />
       </div>
      </div>
    );
  }
}



export default App;
