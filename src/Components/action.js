import {ADD_TODO,TOGGLE_TODO,} from './actionTypes.js'

//action creators
export const addTodo = payload=>({
    type:ADD_TODO,
    payload
        // title:payload,
        // status:false
    
})



export const toggleTodo = payload=>({
    type:TOGGLE_TODO,
    payload
})

// export const add_counter = (payload)=>{
//     return {
//     type:ADD_COUNTER,
//     payload
//     }
// }
// export const reduce_counter = (payload)=>{
//     return{
//         type:REDUCE_COUNTER,
//         payload
//     }
// }

// export const first_name = (payload)=>{
//     return{
//         type:FIRST_NAME,
//         payload
//     }
// }

// export const second_name = (payload)=>{
//     return{
//         type:SECOND_NAME,
//         payload
//     }
// }

// export const email = (payload)=>{
//     return{
//         type:EMAIL,
//         payload
//     }
// }

// export const number = (payload)=>{
//     return{
//         type:NUMBER,
//         payload
//     }
// }
