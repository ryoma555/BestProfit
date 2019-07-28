import reducer from '../reducers'
import { LOAD_DATA, DATA_LOADED } from '../constants/action-type'

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                isLoading: false,
                data: []
            }
        );
    });

    it('should handle LOAD_DATA', () => {
        expect(
            reducer([], {
                type: LOAD_DATA,
            })
        ).toEqual(
            {
                isLoading: true,
                data: []
            }
        );
    });

    it('should handle DATA_LOADED', () => {
        const testPayload = { text: 'test' };

        expect(
            reducer([], {
                type: DATA_LOADED,
                payload: testPayload
            })
        ).toEqual(
            {
                isLoading: false,
                data: testPayload
            }
        );
    });
})