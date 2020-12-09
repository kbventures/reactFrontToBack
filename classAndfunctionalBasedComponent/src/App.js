// import React, {Component} from 'react';
// https://github.com/bradtraversy/github-finder
import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import './App.css';
import axios from 'axios';






// Class based component
// https://github.com/bushblade/RFTB2019_GitHub_Finder/tree/refactor#updates-since-course-published

class App extends React.Component {

  state = {
    users: [],
    user: {},
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

  // Get a single Github user

  getUser = async (username) => {
    this.setState({loading:true});

    const github = axios.create({
      baseURL: 'https://api/github.com',
      timeout: 1000,
      headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN}
    })

    const res = await github.get(`https://api.github.com/users/${username}`);

    
    this.setState({user: res.data, loading: false});
  }


    // Clear users from state
  clearUsers = () => this.setState({users: [], loading: false});

  setAlert = (msg, type) => {
    this.setState({alert:{msg, type}});

    setTimeout(() => this.setState({ alert: null}), 5000);
  };
  

  render() {

    const { users, loading, user} = this.state;

    return (
      <Router>
      <div className='App'>
       <Navbar title='Github Finder' icon='fab fa-github'/>
       <div className="container">
       <Alert alert={this.state.alert}/>
       <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search 
              searchUsers={this.searchUsers}
              clearUsers={this.clearUsers} 
              showClear={
              this.state.users.length > 0 ? true : false}
              setAlert={this.setAlert}
            />
            <Users loading={loading} users={users} />
          </Fragment>
        )} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' render={props => (
                <User 
                  { ...props } 
                  getUser={this.getUser} 
                  user={user}
                  loading={loading}
                  />
            )}
            />
       </Switch>
       </div>
      </div>
      </Router>
    );
  }
}
// The reason why we pass {...prop}
// We pass router prop match, location and  history
//https://reactrouter.com/web/api/Route/route-props



export default App;
