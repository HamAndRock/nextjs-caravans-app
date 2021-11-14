import {AppStateType} from "../storeTypes";

export const getCaravansSelector = (state: AppStateType) => {
    return state.caravans.filteredCaravans
}

export const getFiltersSelector = (state: AppStateType) => {
    return state.caravans.filters
}

export const getErrorSelector = (state: AppStateType) => {
    return state.caravans.error
}

export const getIsLoadingSelector = (state: AppStateType) => {
    return state.caravans.isLoading
}
