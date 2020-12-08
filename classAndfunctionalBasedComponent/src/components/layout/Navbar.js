// imtp short cut for PropTypes

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


// If we don't use Link the state will not survive

// const Navbar = ({icon,title}) =>  {
    
//     return (
//         <nav className='navbar bg-primary'>
//             <h1>
//                 <i className={icon}/> {title}
//             </h1>
//             <ul>
//                 <li>
//                     <a href="/">Home</a>
//                 </li>
//                 <li>
//                     <a href="/about">About</a>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

const Navbar = ({icon,title}) =>  {
    
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon}/> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}
Navbar.defaultProps ={
    title: 'Gihub Finder',
    icon: 'fab-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar

