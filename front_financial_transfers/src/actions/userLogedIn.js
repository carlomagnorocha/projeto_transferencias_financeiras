
export const refreshUserSession = (user, sessionTime) => ({
    type: 'refreshUserSession',
    user: user,
    sessionTime: sessionTime
});