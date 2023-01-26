import {SAVE_USER_LOGIN} from '../Actions/User';

const InitialState = {
  isLogin: false,
};

export function userOperation(state = InitialState, {type, ...rest}) {
  switch (type) {
    case SAVE_USER_LOGIN: {
      return {...state, ...rest};
    }
    default:
      return state;
  }
}
