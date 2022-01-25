export const createRequestOptions = (method, body) => ({
  credentials: 'include',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${DEV_AUTH_TOKEN}`,
    'Content-Type': 'application/json'
  },
  method,
  ...(method !== RestRequestMethods.GET && { body: JSON.stringify(body) })
});