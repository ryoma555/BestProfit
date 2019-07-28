import { LOAD_DATA, DATA_LOADED } from "../constants/action-type";

const initialState = {
    isLoading: false,
    data: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return { ...state, isLoading: true, data: [] };
        case DATA_LOADED:
            return { ...state, data: action.payload, isLoading: false }
        default:
            return state;
    }
};
export default reducer;