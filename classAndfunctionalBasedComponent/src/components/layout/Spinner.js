// racf code snippet

import React, {Fragment} from 'react'
import spinner from './spinner.gif';

// export const Spinner = () => {
//     return (
//             <Fragment>
//                 <img src={spinner} alt="Loading..." style={{width:'200px', margin:'auto', display: 'block'}}></img>
//             </Fragment>            
//     )
// }


// arrow function version refactored
export const Spinner = () => <Fragment>
                <img src={spinner} alt="Loading..." style={{width:'200px', margin:'auto', display: 'block'}}></img>
            </Fragment>            
        


export default Spinner 

