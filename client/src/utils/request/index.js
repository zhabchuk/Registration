import RequestError from "./error";

export default async function request(
  url,
  method = "GET",
  body = null,
  headers = {}
) {
  if (body) {
    body = JSON.stringify(body);
    headers["Content-Type"] = "application/json";
  }
  const response = await fetch(url, { method, body, headers });
  const data = await response.json();
  if (!response.ok) {
    throw new RequestError({
      status: response.status,
      statusText: response.statusText,
      message: data.message,
    });
  }

  return data;
}
