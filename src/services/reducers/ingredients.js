const ingredientsState = {
    ingredients: []
}

export const ingredientsReducer = (state = ingredientsState, action) => {
    switch(action.type) {
        case '1':
            return 1;
        
        default:
            return state
    }
}