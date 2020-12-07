//rce class basec component code snippet

import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {
    state ={
        text:''
    }
    
    // Code snippet short cut ptfr
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text);
        // Pass up search input to App.js through props
        this.props.searchUsers(this.state.text);
        //Clear Form
        this.setState({text:''});
    }

    // This works fine if there is only one input
    // onChange = (e) =>{
    //     this.setState({ text: e.target.value});
    // }

    // When there are several inputs and since we only have one expression 
    // we can refactor
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
    

    render() {

        const {showClear, clearUsers } = this.props;
        return (
            <div>
                <form action="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {showClear && (
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> )}
            </div>
        )
    }
}

// code snippet short cut
// .btn.btn-light.btn-block

export default Search
