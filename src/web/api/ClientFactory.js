const createMethod = ([methodMap, endpoint], method) => {
  return [
    methodMap.push({
      [method.toLowerCase()]: ({
        data = {},
        fail,
        params = {},
        queryParams = {},
        success
      }) => {
        fetchResource({
          fail,
          options: createRequestOptions(method, data),
          success,
          url:
            interpolateParams(endpoint, params) +
            transformQueryParams(queryParams)
        });
      }
    }) && methodMap,
    endpoint
  ];
};

export const ClientFactory = (endpoint, methods) => Object.assign(
  {},
  ...methods.reduce(createMethod, [[], endpoint])[0]
);