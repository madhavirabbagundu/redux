import React from 'react'
import { useSelector } from 'react-redux'

export const InputList = () =>{
const { todos } = useSelector((state)=>state);

return(
    <div>
        {todos.map((item)=>(
            <div key = {item.id}>

                <h1>{item.title}</h1>
                </div>
        ))}
    </div>
)
}