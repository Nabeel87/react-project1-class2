import React from 'react';

function Resturent(props){
    return(
        <div>
            <h1>Your have to reach {props.restName} at sharp {props.restTime} PM
             on {props.restDay}  </h1>
        </div>
    )
}

export default Resturent;