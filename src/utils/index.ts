// Copyright (c) 2021 drafff
import { useEffect } from "react";
import { useState } from "react";
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export const isFalsy = (value: any): boolean => {
  return value === 0 ? false : !value;
};

export const cleanObj = (obj: any) => {
  const result = { ...obj };
  Object.keys(result).forEach(key => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: any) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    //每次在value变化后 设置一个定时器
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    //每次在上个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
