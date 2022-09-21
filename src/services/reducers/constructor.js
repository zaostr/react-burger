const constructorState = {
    bun: null,
    ingredients: [],
    total: 0
}

export const constructorReducer = (state = constructorState, action) => {
    switch(action.type) {
        case '1':
            return 1;
        
        default:
            return state
    }
}