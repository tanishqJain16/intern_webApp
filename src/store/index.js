import {createStore} from "redux"

const reducerFn=(state={isOpened:true},action)=>{

    if(action.type==="TOGGLE_MENU"){
        return {
            ...state,
            isOpened:!state.isOpened
        };
    }
    return state
}


const store=createStore(reducerFn)
export default store