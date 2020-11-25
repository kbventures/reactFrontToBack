// import React, {Component} from 'react';
import React from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

import './App.css';


// Class based component
//
// Within JSX we use className,
// otherwise we get Invalid DOM property...
// error
//
// Within JSX we use htmlFor instead of for
// for avoiding erros like above
//
// In jsx you need one parent elment
// otherwie you will get errors(ie:div);
//
// If we don't want those div's to show
// up in the dom we can use <React.Fragment>
// </React.Fragment> has wrappers instead of div's


// class App extends React.Component {
//   render() {
//     return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//     );

//   }
// }


// class App extends Component {
//   render() {
//     return React.createElement(
//       'div',
//       { className: 'App'},
//       React.createElement('h1',null, 'Hello World')
//     );
//   }
// }


// expression examples

// class App extends React.Component {

//   fooPartOfClass = () => 'Barssss';

//   render() {
//     const name = 'John Doe';
//     const foo = () => 'bar';
//     const loading = false;
//     const showName = true;
//     return (
//       <div className="App">
//         <h1>Hello {name.toUpperCase()}</h1>
//         <h1>Hello {1 + 1}</h1>
//         <h1>Hello {foo()}</h1>
//         <h1>Hello {this.fooPartOfClass()}</h1>
//         {loading ? <h4>Loading...</h4> : <h1>Hello {showName ? name : null}</h1>}
//         {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
//       </div>
//     );
//   }
// }

// Props

class App extends React.Component {
  render() {
    return (
      <div className='App'>
       <Navbar title='Github Finder' icon='fab fa-github'/>
      <UserItem />
      </div>
    );
  }
}



export default App;
