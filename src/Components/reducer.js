import {ADD_COUNTER, ADD_TODO,FIRST_NAME,SECOND_NAME,EMAIL,NUMBER,REDUCE_COUNTER,TOGGLE_TODO} from './actionTypes.js'


// const initState = {
        // input : "input ",
    // }
//  const reducer = (state = initState,{type,payload})=>{
//     console.log(type,state,payload)

//     switch(type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todo:[...state.todo,payload ]
//             }
//             case TOGGLE_TODO:
//             return {
//                 ...state,
//                 todo:[...state.todo,payload ]
//             }
            // case EMAIL:
            //     return {
            //         ...state,
            //         todo:[...state.todo,payload ]
            //     }
            //     case NUMBER:
            //         return {
            //             ...state,
            //             todo:[...state.todo,payload ]
            //         }


            // case LAST_NAME:
            //     return {
            //         ...state,
            //         todo:state.todo.map(item=>item.title===payload?{...item,status:!item.status}:item)

            //     }
                // default:
                    // return state
    // }
// }

// const initState = {
//     counter : 1
// }

// const reducer = (state = initState,{ type,payload }) =>{
//     console.log(state,type,payload)
//     switch(type) {
//         case ADD_COUNTER:
//             return{
//                 ...state,
//                 counter:state.counter+payload
//             };
//             case REDUCE_COUNTER:
//                 return {
//                     ...state,
//                     counter:state.counter-payload
//                 };
//                 default:
//                     return state;
//     }
// }


export const reducer = (store,action)=>{
    switch(action.type){
        case ADD_TODO:
            return{
                ...store,
                todos:[...store.todos,action.payload]
            }
            default:
                return store;
    }
}






// export { reducer }