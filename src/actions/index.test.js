import { loadData, dataloaded } from '../actions';
import { LOAD_DATA, DATA_LOADED } from '../constants/action-type';

describe('actions', () => {
    it('should create load data action', () => {
        const expectedAction = {
            type: LOAD_DATA
        }
        expect(loadData()).toEqual(expectedAction)
    })

    it('should create data loaded action', () => {
        const payload = [1, 2, 3]
        const expectedAction = {
            type: DATA_LOADED,
            payload
        }
        expect(dataloaded(payload)).toEqual(expectedAction)
    })
})