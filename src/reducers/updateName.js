const initialState = {
    name: ''
}

function updateName(state= initialState, action){
    switch(action.type){
        case "UPDATE": return {...state, name: action.payload}
        case "RESET": return {...state, name: ''}
        default: return state
    }
}

export default updateName;