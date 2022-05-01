import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  describe('if string has length more than 1', () => {
    it('Should change register of string', () => {
      const resultOne = changeStringCase('JavaScript is awesome', 'uppercase');
      const resultTwo = changeStringCase('JavaScript is AWESOME', 'lowercase');

      expect(resultOne).toEqual('JAVASCRIPT IS AWESOME');
      expect(resultTwo).toEqual('javascript is awesome');
    });
  });

  describe(`if string hasn't letters`, () => {
    it('should return clean string', () => {
      const resultOne = changeStringCase('', 'uppercase');
      const resultTwo = changeStringCase('', 'lowercase');

      expect(resultOne).toEqual('');
      expect(resultTwo).toEqual('');
    });
  });

  describe('if argument string is not a typeof string', () => {
    it('should change type to string and return it with register which specified', () => {
      const resultOne = changeStringCase(5, 'uppercase');
      const resultTwo = changeStringCase(10, 'lowercase');

      expect(resultOne).toEqual('5');
      expect(resultTwo).toEqual('10');
    });
  });

  describe('if second argument does not exist', () => {
    it('should return string by default', () => {
      const resultOne = changeStringCase('JavaScript is awesome');

      expect(resultOne).toEqual('JavaScript is awesome');
    });
  });
});

describe('sumOfArray()', () => {
  describe('if all elements of array are typeof number', () => {
    it(`should return a sum of array's elements`, () => {
      const result = sumOfArray([1, 2, 3, 4, 5]);
      expect(result).toEqual(15);
    });
  });

  describe('if one of elements is not typeof number', () => {
    it('it sould miss that elem and return sum of array elements', () => {
      const result = sumOfArray([1, 2, 3, 4, 'hi', 5]);

      expect(result).toEqual(15);
    });
  });
});

describe('objectEntries()', () => {
  it('should return array with arays which contains key of obj as zero element and value of obj as first elem', () => {
    const result = objectEntries({
      firstName: 'Vlad',
      lastName: 'Kolomoite',
      address: { city: 'Dnipro' },
    });

    expect(result).toEqual([
      ['firstName', 'Vlad'],
      ['lastName', 'Kolomoite'],
      ['address', { city: 'Dnipro' }],
    ]);
  });
});

describe('divisibleBy()', () => {
  describe('if all arguments are specifed', () => {
    it('should return array of numbers', () => {
      const result = divisibleBy([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

      expect(result).toEqual([3, 6, 9]);
    });
  });

  describe('if one of argumenst is empty', () => {
    it('should return empty array', () => {
      const result = divisibleBy([1, 2, 3, 4, 5, 6, 7, 8]);

      expect(result).toEqual([]);
    });
  });
});

describe('addDotsToString()', () => {
  describe('if length of string more than second argument', () => {
    it('should return cuted string', () => {
      const result = addDotsToString('JavaScript hello world', 5);

      expect(result).toEqual('Ja...');
    });
  });

  describe('if length of string less than second argument', () => {
    it('should return default string', () => {
      const result = addDotsToString('JavaScript hello world', 33);

      expect(result).toEqual('JavaScript hello world');
    });
  });
});
