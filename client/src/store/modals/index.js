const initState = [];

const actionTypes = {
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
};

export const actionShowModal = (payload) => {
  return {
    type: actionTypes.SHOW_MODAL,
    payload,
  };
};

export const actionHideModal = () => {
  return {
    type: actionTypes.HIDE_MODAL,
  };
};

const modalsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return [...state, action.payload];
    case actionTypes.HIDE_MODAL:
      state.splice(-1, 1);
      return [...state];
    default:
      return state;
  }
};

export default modalsReducer;
