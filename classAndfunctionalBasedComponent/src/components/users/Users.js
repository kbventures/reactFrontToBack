//rec + https://api.github.com/users

import UserItem from './UserItem';
import React, { Component } from 'react'

export class Users extends Component {

    // style={userstyle} dynamic way of adding css
    render() {
        return (
            <div style={userStyle}>
                {this.props.users.map(user =>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
