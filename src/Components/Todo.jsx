import React from 'react'
import Todo1 from './Todo1'

const Todo = ()=>{
const [todo2,setTodo] = React.useState(["todo 1","TOdo 2"])

return (
    <>
    <div>
        <Todo1 todo = {todo2}/>
    </div>
    </>
)


}
export default Todo 