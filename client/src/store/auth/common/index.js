const actionTypes = {
  AUTH_START_LOADING: "AUTH_START_LOADING",
  AUTH_HANDLER_ERROR: "AUTH_HANDLER_ERROR",
  AUTH_HANDLER_SUCCESS: "AUTH_HANDLER_SUCCESS",
  CLEAR_ERROR: "CLEAR_ERROR",
  SUCCESS_CLEAR: "SUCCESS_CLEAR",
};

export const startLoading = () => ({ type: actionTypes.AUTH_START_LOADING });

export const handlerSuccessLoadingAuth = () => ({
  type: actionTypes.AUTH_HANDLER_SUCCESS,
});

export const handlerErrorLoadingAuth = (payload) => ({
  type: actionTypes.AUTH_HANDLER_ERROR,
  payload,
});

export const handlerClearError = () => ({ type: actionTypes.CLEAR_ERROR });

export const handlerClearSuccess = () => ({ type: actionTypes.SUCCESS_CLEAR });

export default function reducer(state, { type, payload }) {
  switch (type) {
    case actionTypes.AUTH_START_LOADING:
      return { ...state, isLoading: true, success: false };
    case actionTypes.AUTH_HANDLER_SUCCESS:
      return { ...state, isLoading: false, success: true };
    case actionTypes.AUTH_HANDLER_ERROR:
      return {
        ...state,
        isLoading: false,
        success: false,
        error: payload.message,
      };
    case actionTypes.CLEAR_ERROR:
      return { ...state, error: null };
    case actionTypes.SUCCESS_CLEAR:
      return { ...state, success: false };
    default:
      return state;
  }
}
