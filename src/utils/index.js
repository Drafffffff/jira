// Copyright (c) 2021 drafff
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export const isFalsy = value => {
  return value === 0 ? false : !value;
};

export const cleanObj = obj => {
  const result = { ...obj };
  Object.keys(result).forEach(key => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
