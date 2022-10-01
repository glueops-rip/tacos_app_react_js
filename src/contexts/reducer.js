export const reducer = (state, action) => {
    switch (action.type) {
        case 'save_data':
            const { name, value } = action.value;
            return {
                ...state,
                data: {
                    ...state.data,
                    [name]: value
                }
            }
        default:
            return state;
    }
}

export const initialState = {
    data: {}
}
