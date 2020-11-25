// imtp short cut for PropTypes

import React from 'react'
import PropTypes from 'prop-types'




// Class based compponent
// const Navbar = (props) =>  {
    
//         return (
//             <nav className='navbar bg-primary'>
//                 <h1>
//                     <i className={props.icon}/> {props.title}
//                 </h1>
//             </nav>
//         )
//     }
//     Navbar.defaultProps ={
//         title: 'Gihub Finder',
//         icon: 'fab-github'
//     };

//     Navbar.propTypes = {
//         title: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired
//     }



//Refactored functional component
const Navbar = ({icon,title}) =>  {
    
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon}/> {title}
            </h1>
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


// rec short cut
