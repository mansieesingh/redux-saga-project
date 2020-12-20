const initialState = {
    apiData: null
}

function getDataReducer(state = initialState, action) {
    switch (action.type) {
        case "DATA_RECEIVED": return { ...state, apiData: action.payload }
        default: return state
    }
}

export default getDataReducer;