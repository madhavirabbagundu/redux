import { addTodo,toggleTodo } from "./action.js"
import reducer from './reducer.js'
class Store{
    constructor(reducer,initState){
        this.reducer = reducer;
        this.state=initState
    }
    //retrive the state
    getState(){
        return this.state
    }
    //dispatch and action 
    dispatch(action){
        this.state = this.reducer(this.state,action)
    }
}

//initial state
const initState={
    todo:[]
}


var store = new Store(reducer,initState)

console.log(store.getState() )

store.dispatch( addTodo("Buy Milk"))
store.dispatch(addTodo("Buy chocolate"))
store.dispatch(toggleTodo("buy biscuit"))

console.log(store.getState() )