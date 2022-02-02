export default class RequestError extends Error {
  constructor({
    status,
    message = "Something wrong happen during the request",
  }) {
    super();
    this.status = status;
    this.message = message;
  }
}
