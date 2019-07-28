import { getBestCombination, getDisplayDate, getDisplayTime } from '../utils';

describe('utils', () => {
    describe('getBestCombination', () => {
        it('should get the best profit from provided data', () => {
            const data = [
                { time: 0, price: 11 },
                { time: 1, price: 15 },
                { time: 2, price: 16 },
                { time: 3, price: 10 },
                { time: 4, price: 12 }
            ]

            const expectedOutput = {
                buy: { time: 0, price: 11 },
                sell: { time: 2, price: 16 },
                profit: 5
            }
            expect(getBestCombination(data)).toEqual(expectedOutput)
        });

        it('should return null when there is no possible way to earn profit', () => {
            const data = [
                { time: 0, price: 11 },
                { time: 1, price: 10 },
                { time: 2, price: 9 },
                { time: 3, price: 8 },
                { time: 4, price: 7 }
            ]

            const expectedOutput = null
            expect(getBestCombination(data)).toEqual(expectedOutput)
        });

        it('should return null when quotes length is less than 2', () => {
            const data = [
                { time: 0, price: 11 },
            ]

            const expectedOutput = null
            expect(getBestCombination(data)).toEqual(expectedOutput)
        });
    });

    describe('getDisplayDate', () => {
        it('should return the corrent display date', () => {
            const input = '20190101';

            const expectedOutput = '01-Jan-19';

            expect(getDisplayDate(input)).toEqual(expectedOutput)
        })
    });

    describe('getDisplayDate', () => {
        it('should return the corrent display date', () => {
            const input = '1400';

            const expectedOutput = '02:00PM';

            expect(getDisplayTime(input)).toEqual(expectedOutput)
        })
    });
})