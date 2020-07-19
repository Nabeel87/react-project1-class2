import React from 'react'


function Dinner(props){
    return(
        <div>
            <h1>Today we are Serving {props.dishName}, and its {props.dishType} Food</h1>
        </div>
    )
}

export default Dinner;