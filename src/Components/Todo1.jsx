import React from 'react'
const Todo1 = ({todo})=>{



    return(
        <>
        <div>
            {todo.map((item)=>(
                <h1>{item}</h1>
            ))}
        </div>
        </>
    )
}
export default Todo1