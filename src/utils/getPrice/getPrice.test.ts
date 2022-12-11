import { getPrice } from './getPrice';

describe('get price returns valid value', () => {
    test('get price 0.5 will be 5$', () => {
        expect(getPrice(0.5)).toBe('5 $');
    });
});
