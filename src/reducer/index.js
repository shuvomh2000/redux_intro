
import { combineReducers } from "redux"

const plusminusreducer = (state = 0,action)=>{

    if(action.type == 'PLUS_NUMBER'){
        state = state + action.payload
        return state
    }else if(action.type == 'MINUS_NUMBER'){
        if(state>0){
            state = state - action.payload
        }
        return state
    }else{
        return state 
    }
}

const rootReducer = combineReducers({
    plusminus: plusminusreducer

})

export default rootReducer