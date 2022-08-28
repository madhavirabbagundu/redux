import React from 'react'
import { useDispatch } from 'react-redux'
import {v4 as uuid } from 'uuid'

// import { store } from '../Components/store'
import { add_counter,reduce_counter,addTodo,toggleTodo} from './action';
import { InputList } from './InputList';

const ReduxInput = () =>{
const [input,setInput] = React.useState("");
// const { input1 } = store.getState();
const dispatch = useDispatch();

// const { dispatch } = store
    // const update = () => setInput(input+1)



const handleAdd = () =>{
    const payload = {
        title:input,
        status:false,
        id:uuid()
    }
    // update()
    dispatch(addTodo(payload))
    console.log(payload)

}

const handleChange = (e)=>{
    setInput(e.target.value)
}




return(
    <>
    <div>
        {/* <h1> input is : {input1}</h1> */}
    <input type = "text"
    placeholder='something todo'
    value = {input}
    onChange = {handleChange}
    />
    </div>
    <button onClick = {handleAdd}>ADD</button>
    {/* <div>
        {input.map((item)=>(
            <h1>{item}</h1>
        ))}
    </div> */}
    <InputList />
    </>
)
}
export default  ReduxInput 