
const initialState = {
    user: undefined,
    sessionTime: undefined
};


export const userSessionReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'refreshUserSession':
        return {
            ...state,
            user: action.user,
            sessionTime: action.sessionTime
        };
    default:
        return state;
    }
};