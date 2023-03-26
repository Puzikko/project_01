export const getUserId = (state) => {
    return state.auth.id;
}
export const getIsAuth = (state) => {
    return state.auth.isAuth;
}
export const getCaptchaURL = (state) => {
    return state.auth.captchaURL;
}