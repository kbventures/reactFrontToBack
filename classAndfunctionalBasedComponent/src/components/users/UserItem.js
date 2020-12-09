// rce quick snippet
// https://api.github.com/users
import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


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
            <Link to={`/user/${login}`} className="btn btn-dark sm my-1">
                More
            </Link>
            </div>
        </div>
    )
}

// snippet ptor
UserItem.propTypes = {
    user: PropTypes.object.isRequired,

}


export default UserItem
