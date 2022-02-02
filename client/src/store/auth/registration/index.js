import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request";
import {
  handlerErrorLoadingAuth,
  handlerSuccessLoadingAuth,
  startLoading,
} from "../common";

export function authRegistration(payload) {
  return (dispatch) =>
    fetchStoreData({
      dispatch,
      startLoading: startLoading,
      hanlerSuccess: handlerSuccessLoadingAuth,
      handlerError: handlerErrorLoadingAuth,

      fetch: async () => {
        await request("/api/auth/registration", "POST", { ...payload });
      },
    });
}
