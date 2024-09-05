import { splitMoneyEvenly } from './money-helpers';

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
});