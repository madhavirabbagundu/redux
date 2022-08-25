import React from 'react'
const List = () =>{
    const [list,setList] =React.useState(["a","b","c","f","h"])
    return(
        <>
        <ul>
            {list.map((item)=>(
                // <ul>
                    <li>{item}</li>
                    // </ul>
            ))}
        </ul>
        </>
    )

}
export default List