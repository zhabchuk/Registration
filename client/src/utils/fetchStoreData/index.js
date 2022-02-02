export default async function fetchStoreData({
  dispatch,
  startLoading,
  hanlerSuccess,
  handlerError,
  fetch,
}) {
  try {
    if (typeof startLoading === "function") {
      dispatch(startLoading());
    }
    const response = await fetch();
    if (typeof hanlerSuccess === "function") {
      dispatch(hanlerSuccess());
    }
    return response;
  } catch (error) {
    if (typeof handlerError === "function") {
      dispatch(handlerError(error));
    }
  }
}
