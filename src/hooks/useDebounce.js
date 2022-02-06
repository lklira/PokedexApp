import {useMemo, useRef} from 'react';

function callFn(fn, args) {
  if (typeof fn === 'function') {
    fn(...args);
  }
}

function useDebounce(fn, duration) {
  const timeoutRef = useRef(null);

  return useMemo(() => {
    clearTimeout(timeoutRef.current);

    return function debounced(...args) {
      if (!duration) {
        return callFn(fn, args);
      }

      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        callFn(fn, args);
      }, duration);

      return null;
    };
  }, [fn, duration]);
}

export default useDebounce;
