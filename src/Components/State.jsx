import React from 'react'
const State = () =>{
    const [data,setData] = React.useState({first:"",second:""})


    return(
        <>
        <div>
            <h1>here we can see the names</h1>
            <form>
            <input type = "text"
            value = {data.first}
            onChange={(e)=>setData({...data ,first:e.target.value})}
            />

            <input type = "text"
            value = {data.second}
            onChange={(e)=>setData({...data , second:e.target.value})}
/>
</form>
<div>
    <h1>first name:{data.first}</h1>
    <h1>second name:{data.second}</h1>
   <div>{JSON.stringify({data})}</div> {/* <h3>{JSON.stringfy(data)}</h3> */}
</div>
        </div>
        </>
    )
}
export default State