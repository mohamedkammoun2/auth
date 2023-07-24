import {
    GET_PROFIL,
  GET_PROFIL_FAIL,
  GET_PROFIL_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SING_UP,
  SING_UP_FAIL,
  SING_UP_SUCCESS,
} from "./actionType";

const init = {
  user: null,
  error: null,
  loading: false,
  token: null,
  isAuth:false
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case SING_UP:
    case LOGIN:
        case GET_PROFIL:
      return {
        ...state,
        loading: true,
      };
    case SING_UP_FAIL:
    case LOGIN_FAIL:
        case GET_PROFIL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SING_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: payload.user,
        token: payload.token,
        isAuth:true
      };
      case GET_PROFIL_SUCCESS :
        return {
...state,loading:false,error:null,user:payload
        }
    default:
      return state;
  }
};
