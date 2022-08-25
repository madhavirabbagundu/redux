import React from 'react'

const Count = ()=>{
const [count,setCount] = React.useState(0)

const handleClick = ()=>{
    setCount(count+1)
}
const handle = ()=>{
    setCount(count-1)
}
console.log(count)
return(
    <>
    <div>
        <h1>COUNT:{count}</h1>
        <button onClick = {handleClick}>ADD</button>
        <button onClick = {handle}>REDUCE</button>

    </div>
    </>
)

}
export default Count 