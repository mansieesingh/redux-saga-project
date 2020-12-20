const initialState = {
    count: 0
}

function updateCount(state= initialState, actions){
    switch(actions.type){
        case "INC": return {...state, count: state.count + 1}
        case "DEC": return {...state, count: state.count - 1}
        default: return state
    }
}

export default updateCount;