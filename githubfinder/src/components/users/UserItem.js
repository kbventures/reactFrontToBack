// rce quick snippet
// https://api.github.com/users
import React, { Component } from 'react'

class UserItem extends Component {
    // constructor data will show up in the web developer console
    // because it is fired off the moment the function is loaded 
    //
    // you can use style={{backgroundColor: 'red''}} to add inline style.  Notice backgroundColor 
    // uses camel case and the value is in '' 




    // constructor(){
        
    //     super();
    //     this.state = {
    //         id:'id',
    //         login: 'mojombo',
    //         avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //         html_url: 'https://github.com/mojombo'
    //     }
    // }
    //  You can erase what's just above in comment and replace it 

        state = {
            id:'id',
            login: 'mojombo',
            avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/mojombo'
        }
    
    
    render() {

        // Instead of using this.state we could destructure
        const {avatar_url}=this.state;

        return (
            <div className="card text-center">
                <img 
                    src={avatar_url} 
                    alt="" className="round-img" 
                    style={{width: '60px'}}
                    
                />
                <h3>
                    {this.state.login}
                </h3>
                <div>
                    <a href={this.state.html_url} className="btn btn-dark sm my-1">More</a>
                </div>
            </div>
        )
    }
}

export default UserItem
