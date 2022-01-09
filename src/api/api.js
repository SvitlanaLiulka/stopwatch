export const createDebounceFunction = (f, ms) => {
    let timeout;
    return function () {
      const fCall = () => {
        f.apply(this, arguments)
      }
    clearTimeout(timeout);
    timeout = setTimeout(fCall, ms)
    }
};