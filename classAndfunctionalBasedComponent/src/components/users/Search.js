//rce class basec component code snippet

import React, { Component } from 'react'

export class Search extends Component {
    state ={
        text:''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text);
    }

    // This works fine if there is only one input
    // onChange = (e) =>{
    //     this.setState({ text: e.target.value});
    // }

    // When there are several inputs and since we only have one expression 
    // we can refactor
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
    

    render() {
        return (
            <div>
                <form action="form">
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
