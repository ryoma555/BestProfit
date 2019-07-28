import React from 'react';
import BestProfit from './bestProfit';
import { mount } from 'enzyme';

const mockDate = '20190101';
const mockCurrency = 'BTC';

describe('bestProfit', () => {
    it('should show correct message when unable to earn profit', () => {
        const mockBestCombination = null

        const wrapper = mount(
            <BestProfit bestCombination={mockBestCombination} currency={mockCurrency} date={mockDate} />
        );

        const result = wrapper.find('div');
        expect(result.text()).toBe('Unable to earn profit');
    });

    it('should show best combination to earn profit when possible', () => {
        const mockBestCombination = {
            buy: { time: '1200', price: '1' },
            sell: { time: '1300', price: '2' },
            profit: 1
        }

        const wrapper = mount(
            <BestProfit bestCombination={mockBestCombination} currency={mockCurrency} date={mockDate} />
        );

        const result = wrapper.find('div.profit-result');
        expect(result.text()).toContain('Profit: $1');
    });

})
