export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.asLoggedIn;
export const selectAuthError = state => state.auth.error;
export const selectAuthLoading = state => state.auth.isLoading;
export const selectIsFetchingCurrentUser = state =>
  state.auth.selectIsFetchingCurrentUser;
