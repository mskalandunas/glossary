const debounce = (callback, wait) => {
  let timeout;

  return function executedFunction(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      clearTimeout(timeout);
      callback(...args);
    }, wait);
  };
};