import React from 'react';
import { BestProfitSummary } from './bestProfitSummary';
import { mount } from 'enzyme';

describe('bestProfitSummary', () => {
    it(`should not show result when there is no data`, () => {
        const mockState = {
            isLoading: false,
            data: []
        }

        const wrapper = mount(
            <BestProfitSummary state={mockState}/>
        );

        const result = wrapper.find('div.profit-result');
        expect(result.length).toBe(0);
    });

    it(`should show result when there is data`, () => {
        const mockState = {
            isLoading: false,
            data: [{
                "currency": "BTC",
                "date": "20180507",
                "quotes": [
                    {
                        "time": "0915",
                        "price": "34.98"
                    },
                    {
                        "time": "1045",
                        "price": "36.13"
                    },
                ]
            }]
        }

        const wrapper = mount(
            <BestProfitSummary state={mockState}/>
        );

        const result = wrapper.find('div.profit-result');
        expect(result.length).toBe(1);
    });
});

