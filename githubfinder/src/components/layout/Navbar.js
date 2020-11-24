// imtp short cut for PropTypes

import React, { Component } from 'react'
import PropTypes from 'prop-types'




// Class based compponent
export class Navbar extends Component {
    

    // In the event you don't pass props in App.js 
    // Default props
    // Having a prop passed from App.js would overwrite the static value

    static defaultProps ={
        title: 'Gihub Finder',
        icon: 'fab-github'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon}/> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar


// rec short cut
