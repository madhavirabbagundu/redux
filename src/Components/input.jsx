import React from 'react'

const Input =()=>{
const [input,setInput] = React.useState({nam:""})
const [data1,setData] = React.useState({
    name :"",
    lastname:"",
    email : "",
    password: "",
    number : ""
})
const [res1,setRes] = React.useState([])


const handlechange = (e)=>{
    const {name,value} = e.target
    setInput({...input,[name]:value})
}
const {nam} = input
console.log(input)
const handleform = (e) =>{
    const {name,value} = e.target
   setData({...data1,[name]:value})
}
React.useState(()=>{
    fetch(`http://localhost:3000/data1`)
    .then((res)=>res.json())
    .then((json)=>{setRes(json)
    });
    },[])

const handleSubmit = (e) =>{
    e.preventDefault()
    fetch(`http://localhost:3000/data1`,{
    method:"POST",
    body:JSON.stringify(data1),
    headers:{
        "Content-type":"application/json"
    }
})
.then((res)=>res.json())
.then((res)=>console.log(res))
    // const new = {name:name,}
}


console.log(res1)
const {name,lastname,password,email,number} = data1
console.log(data1)
return(
    <>
    <div>
        <input type = "text"
        placeholder='add something'
        onChange={handlechange}
        name = "nam"
        value = {nam}
        />
    </div>

    <div>
         <form onSubmit = {handleSubmit}> 
            <input type = "text"
            placeholder='name'
            value = {name}
            name = "name"
            onChange={handleform}/>

             <input type = "text"
            placeholder='lastname'
            value = {lastname} 
            name = "lastname"
            onChange={handleform}/>

             <input type = "number"
            placeholder='number'
            value = {number}
            name = "number"
            onChange={handleform}/>

             <input type = "email"
            placeholder='email'
            value = {email}
            name = "email"
            onChange={handleform}/>

             <input type = "password"
            placeholder='password'
            value = {password}
            name = "password"
            onChange={handleform}/>

            <input type = "Submit" 
            value = "Submit"/>
        </form>
    </div>

    <div>
        {
            res1.map((item)=>(
                <div>
                <table>
                    <thead>
                        
                       <th>name</th> 
                       <th>email</th>
                       <th>number</th>
                       <th>password</th>
                       <th>lastname</th>
                        
                    </thead>
                    <tbody>
                        
                            {/* <tr> */}
                               <td>{item.name}</td>                          
                               <td>{item.number}</td>                        
                               <td>{item.lastname}</td>                                                   <td>{item.email}</td>
                               <td>{item.password}</td>
                                {/* </tr>   */}
                       </tbody>
                    </table>
                    </div>
            ))
        }
    </div>
    </>
)



}
export default Input