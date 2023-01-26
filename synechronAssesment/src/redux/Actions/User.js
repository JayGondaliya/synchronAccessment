export const SAVE_USER_LOGIN = 'SAVE_USER_LOGIN';
export function saveUserLoginInRedux(data) {
  return {
    type: SAVE_USER_LOGIN,
    isLogin: data,
  };
}
