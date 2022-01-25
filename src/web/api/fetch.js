export const fetchResource = ({
  fail,
  options,
  success,
  url
}) =>
  fetch(url, options).then(
    res => res.json().then(!res.ok || res.status >= 400 ? fail : success),
    fail
  );