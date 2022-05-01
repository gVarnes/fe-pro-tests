/**
 * @param {string} string
 * @param {'uppercase' | 'lowercase'} stringCase
 * @returns {string}
 */
export const changeStringCase = (string, stringCase) => {
  if (typeof string !== 'string') {
    string = string.toString();
  }
  switch (stringCase) {
    case 'lowercase':
      return string.toLowerCase();
    case 'uppercase':
      return string.toUpperCase();
    default:
      return string;
  }
};

/**
 * @param {number[]} array
 * @returns {number}
 */
export const sumOfArray = (array) => {
  return array.reduce((accumulator, currentValue) => {
    if (typeof currentValue === 'number') {
      return accumulator + currentValue;
    }

    return accumulator;
  }, 0);
};

/**
 * @param {string: *} object
 * @returns {[string, *][]}
 */
export const objectEntries = (object) => {
  const array = [];

  for (let key in object) {
    array.push([key, object[key]]);
  }

  return array;
};

/**
 * @param {number[]} array
 * @param {number} number
 * @returns {number[]}
 */
export const divisibleBy = (array, number) => {
  return array.filter((num) => num % number === 0);
};

/**
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const addDotsToString = (string, length) => {
  return string.length > length ? `${string.slice(0, length - 3)}...` : string;
};
