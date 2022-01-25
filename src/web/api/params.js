export const interpolateParams = (
  endpoint,
  params = {}
) =>
  Object.keys(params).reduce(
    (interpolatedEndpoint, paramKey) =>
      interpolatedEndpoint.replace(`:${paramKey}`, params[paramKey]),
    endpoint
  );

export const transformQueryParams = queryParams => {
  return Object.keys(queryParams)
    .reduce(
      (queryString, param) =>
        `${queryString}${param}=${String(queryParams[param])}&`,
      '?'
    )
    .slice(0, -1);
};