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
import axios from "axios";

export const userSingUp = (newUser) => async (dispatch) => {
  dispatch({ type: SING_UP });
  try {
    const res = await axios.post("/user/signUp", newUser);
    dispatch({
      type: SING_UP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SING_UP_FAIL,
      payload: error.response.data,
    });
  }
};

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    const res = await axios.post("/user/login", user);
    localStorage.setItem("token", res.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const getUserProfil = () => async (dispatch) => {
  dispatch({ type: GET_PROFIL });
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: token },
  };
  try {
    const res = await axios.get("/user/get", config);
    dispatch({
        type:GET_PROFIL_SUCCESS,
        payload:res.data
    })
  } catch (error) {
    dispatch({
      type: GET_PROFIL_FAIL,
      payload: error.response.data,
    });
  }
};
