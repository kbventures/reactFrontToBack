// rce quick snippet
// https://api.github.com/users
import React from 'react'
import PropTypes from 'prop-types';


// we can create functional components this way 
// function UserItem() {
// or

// const UserItem = () => {

//         // Instead of using this.state we could destructure
//         const {login, avatar_url, html_url}=this.props.user;

//         return (
//             <div className="card text-center">
//                 <img 
//                     src={avatar_url} 
//                     alt="" 
//                     className="round-img" 
//                     style={{width: '60px'}}
                    
//                 />
//                 <h3>
//                     {login}
//                 </h3>
//                 <div>
//                     <a href={html_url} className="btn btn-dark sm my-1">More</a>
//                 </div>
//             </div>
//         )
//     }

// const UserItem = (props) => {
//     const {login, avatar_url, html_url}= props.user;

//     return (
//         <div className="card text-center">
//             <img 
//                 src={avatar_url} 
//                 alt="" 
//                 className="round-img" 
//                 style={{width: '60px'}}
                
//             />
//             <h3>
//                 {login}
//             </h3>
//             <div>
//                 <a href={html_url} className="btn btn-dark sm my-1">More</a>
//             </div>
//         </div>
//     )
// }

// Refactored Functional Component
const UserItem = ({user:{login,avatar_url,html_url}}) => {
    
    return (
        <div className="card text-center">
            <img 
                src={avatar_url} 
                alt="" 
                className="round-img" 
                style={{width: '60px'}}
                
            />
            <h3>
                {login}
            </h3>
            <div>
                <a href={html_url} className="btn btn-dark sm my-1">More</a>
            </div>
        </div>
    )
}

// snippet ptor
UserItem.propTypes = {
    user: PropTypes.object.isRequired,

}


export default UserItem
