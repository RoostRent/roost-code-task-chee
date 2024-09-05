import { splitMoneyByRatio, splitMoneyEvenly } from './money-helpers';

describe('money helpers', () => {
  describe('splitMoneyEvenly', () => {
    it.each`
      amount      | split     | output
      ${12}       | ${4}      | ${[3, 3, 3, 3]}
      ${14}       | ${4}      | ${[4, 4, 3, 3]}
      ${15}       | ${4}      | ${[4, 4, 4, 3]}
      ${100}      | ${1}      | ${[100]}
    `('splits $amount into $split equal amounts', ({amount, split, output}) => {
      expect(splitMoneyEvenly(amount, split)).toEqual(output);
    })

    it('throws an error if amount cannot be split', () => {
      expect(() => {
        splitMoneyEvenly(100, 0);
      }).toThrow('Split must be a positive number');

      expect(() => {
        expect(splitMoneyEvenly(0, 2))
      }).toThrowError('Amount must be a positive number');
    });
  });

  describe('splitMoneyByRatio', () => {
    it.each`
      amount      | ratios            | output
      ${12}       | ${[3, 2, 1]}      | ${[6, 4, 2]}
      ${12}       | ${[2, 3, 1]}      | ${[4, 6, 2]}
      ${14}       | ${[1, 3, 1, 1]}   | ${[3, 7, 2, 2]}
      ${100}      | ${[1]}            | ${[100]}
    `('splits $amount into the correct amounts based on ratios: $ratios', ({amount, ratios, output}) => {
      expect(splitMoneyByRatio(amount, ratios)).toEqual(output);
    })

    it('throws an error if amount cannot be split', () => {

      expect(() => {
        expect(splitMoneyByRatio(0, [1, 2]))
      }).toThrowError('Amount must be a positive number');
    });

    it('throws an error if ratios are not valid', () => {
      expect(() => {
        splitMoneyByRatio(100, []);
      }).toThrow('Ratios must contain only positive numbers');

      expect(() => {
        splitMoneyByRatio(100, [1, 0, 2]);
      }).toThrow('Ratios must contain only positive numbers');
    })
  });
});