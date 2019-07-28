import { LOAD_DATA, DATA_LOADED } from "../constants/action-type";

export const loadData = () => ({
    type: LOAD_DATA,
});

export const dataloaded = (payload) => ({
    type: DATA_LOADED,
    payload
});