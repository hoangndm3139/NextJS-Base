import { useRef } from "react";

export const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  blockTime: number,
): ((...args: Parameters<T>) => ReturnType<T> | void) => {
  const refTimeBlock = useRef<number>(Date.now());

  return (...params: Parameters<T>): ReturnType<T> | void => {
    if (Date.now() > refTimeBlock.current) {
      refTimeBlock.current = Date.now() + blockTime;
      return callback(...params);
    }
  };
};
