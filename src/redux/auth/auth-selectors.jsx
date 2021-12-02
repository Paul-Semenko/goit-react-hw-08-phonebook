export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUsername = state => state.auth.user.name;
export const getIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getIsRefreshing,
};

export default authSelectors;
