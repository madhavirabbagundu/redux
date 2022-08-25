import React from 'react'
import Todo1 from './Todo1'

const Todo = ()=>{
const [todo,setTodo] = React.useState(["todo 1","TOdo 2"])

return (
    <>
    <div>
        <Todo1 todo = {todo}/>
    </div>
    </>
)



}
export default Todo 