// import React from 'react'
// import { store } from '../Components/store'
// import { add_counter,reduce_counter} from './action';

// const ReduxCount = ()=>{
//     const { counter } = store.getState();
//     const { dispatch } = store
//     const [state,setState] = React.useState(0)
 
//     const update = () => setState(state+1)

// const handleAdd = () =>{
//     dispatch(add_counter(1));
//     update()
// }

// const handleReduce = () =>{
//     dispatch(reduce_counter(1));
//     update()
// }

//     return(
//         <>
//         <div>
//             <h2>this is the redux counter</h2>
//             <h1>counter:{counter}</h1>
//             <button onClick = {handleAdd}>ADD</button>
//             <button onClick = {handleReduce}>REDUCE</button>
            

//             <input type = "text"
//             placeholder = "add something"
//             />
//         </div>
//         </>
//     )
// }
// export default ReduxCount 
