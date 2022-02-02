import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request";
import {
  handlerErrorLoadingAuth,
  handlerSuccessLoadingAuth,
  startLoading,
} from "../common";

const actionTypes = {
  SET_AUTH_USER: "SET_AUTH_USER",
  CLEAR_AUTH_USER: "CLEAR_AUTH_USER",
};

const setUser = (payload) => ({ type: actionTypes.SET_AUTH_USER, payload });
export const clearUser = () => ({ type: actionTypes.CLEAR_AUTH_USER });

export function authLogin(payload) {
  return (dispatch) =>
    fetchStoreData({
      dispatch,
      startLoading: startLoading,
      hanlerSuccess: handlerSuccessLoadingAuth,
      handlerError: handlerErrorLoadingAuth,

      fetch: async () => {
        const data = await request("/api/auth/login", "POST", { ...payload });
        dispatch(setUser(data));
      },
    });
}

export default function reducer(state, { type, payload }) {
  switch (type) {
    case actionTypes.SET_AUTH_USER:
      return { ...state, user: payload };
    case actionTypes.CLEAR_AUTH_USER:
      return { ...state, user: null };
    default:
      return state;
  }
}
