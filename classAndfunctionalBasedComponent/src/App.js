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

    // we can't change the state this way
    // this.state.loading = true; for class components

    /*
    You can and should use this.setState() in only these React lifecycle
    methods: componentDidMount, componentDidUpdate and 
    componentWillReceiveProps. You can also set it in the componentWillMount
    method, but it’s recommend to use the constructor instead.
    */

    this.setState({loading:true});

    const res = await axios.get('https://api.github.com/users');
    
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
