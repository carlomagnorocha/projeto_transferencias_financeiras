
const initialState = {
    admUsersTables: undefined,
    admRolesTables: undefined
};


export const usersListsReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'refreshUsersLists':
        return {
            ...state,
            admUsersTables: action.admUsersTables,
            admRolesTables: action.admRolesTables
        };
    default:
        return state;
    }
};