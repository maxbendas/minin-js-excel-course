import {storage} from "@core/utils";
import {defaultStyles, defaultTitle} from "@/constants";

const defaultState = {
    title: defaultTitle,
    colState: {},
    rowState: {},
    dataState: {},
    styleState: {},
    currentText: '',
    currentStyles: defaultStyles
}

const normalize = state=>({
 ...state,
    currentText: '',
    currentStyles: defaultStyles
})

export const initialState = storage('excel-state') ?
    normalize(storage('excel-state')) :
    defaultState
