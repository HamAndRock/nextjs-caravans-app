import {CaravansReducerActionTypes, CaravansReducerInitialStateType, CaravansReducerThunkTypes} from "./caravansTypes";
import {CaravanType} from "../../types/dataTypes";
import {caravansApi} from "../../api/caravansApi";
import { v4 as uuidv4 } from 'uuid';

const SET_CARAVANS = 'caravans/SET_CARAVANS'
const SET_ERROR = 'caravans/SET_ERROR'
const CLEAR_ERROR = 'caravans/CLEAR_ERROR'
const SET_IS_LOADING = 'caravans/SET_IS_LOADING'
const INCREASE_COUNT = 'caravans/INCREASE_COUNT'
const SET_INITIAL_COUNT = 'caravans/SET_INITIAL_COUNT'
const SET_MIN_COUNT = 'caravans/SET_MIN_COUNT'
const SET_INSTANT_BOOKING = 'caravans/SET_INSTANT_BOOKING'
const SET_TYPE = 'caravans/SET_TYPE'
const SET_PRICE = 'caravans/SET_PRICE'
const APPLY_FILTERS = 'caravans/APPLY_FILTERS'

export const initialState = {
    caravans: [] as CaravanType[] | [],
    filteredCaravans: [] as CaravanType[] | [],
    error: null as string | null,
    isLoading: false as boolean,
    filters: {
        price: {
            min: 100,
            max: 10000
        },
        type: [] as string[] | [],
        instantBooking: true,
        count: 6
    }
}

export const caravansReducer = (state = initialState, action: CaravansReducerActionTypes): CaravansReducerInitialStateType => {
    switch (action.type) {
        case SET_CARAVANS:
            return {
                ...state,
                caravans: action.payload.caravans.map(c => ({...c, id: uuidv4()}))
            }
        case SET_ERROR:
            return {
                ...state,
                error: 'Something went wrong'
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case INCREASE_COUNT:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    count: state.filters.count < state.caravans.length ? state.filters.count + 3 : state.filters.count
                }
            }
        case SET_INITIAL_COUNT:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    count: 6
                }
            }
        case SET_MIN_COUNT:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    count: 3
                }
            }
        case SET_INSTANT_BOOKING:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    instantBooking: action.payload.isBooking
                }
            }
        case SET_TYPE:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    type: action.payload.type
                }
            }
        case SET_PRICE:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    price: {
                        ...state.filters.price,
                        min: action.payload.minPrice,
                        max: action.payload.maxPrice
                    }
                }
            }
        case APPLY_FILTERS:
            let arrFilteredByType = !!state.filters.type.length ? state.caravans.filter(c => state.filters.type.some(f => f === c.vehicleType)) : state.caravans
            let arrFilteredByPrice = arrFilteredByType.filter(e => state.filters.price.min <= e?.price && e?.price <= state.filters.price.max)
            return {
                ...state,
                filteredCaravans: arrFilteredByPrice
            }
        default:
            return state
    }
}

export const caravansActions = {
    caravansSet: (caravans: CaravanType[]) => ({type: SET_CARAVANS, payload: {caravans}} as const),
    isLoadingSet: (isLoading: boolean) => ({type: SET_IS_LOADING, payload: {isLoading}} as const),
    errorSet: () => ({type: SET_ERROR} as const),
    errorCleared: () => ({type: CLEAR_ERROR} as const),
    countIncreased: () => ({type: INCREASE_COUNT} as const),
    initialCountSet: () => ({type: SET_INITIAL_COUNT} as const),
    minCountSet: () => ({type: SET_MIN_COUNT} as const),
    instantBookingSet: (isBooking: boolean) => ({type: SET_INSTANT_BOOKING, payload: {isBooking}} as const),
    typeSet: (type: string[]) => ({type: SET_TYPE, payload: {type}} as const),
    filtersApplied: () => ({type: APPLY_FILTERS} as const),
    priceSet: (minPrice: number, maxPrice: number) => ({type: SET_PRICE, payload: {minPrice, maxPrice}} as const)
}

export const getCaravans = ():CaravansReducerThunkTypes => async dispatch => {
    dispatch(caravansActions.errorCleared())
    dispatch(caravansActions.isLoadingSet(true))
    try {
        const res = await caravansApi.getCaravans()
        if(res.status === 200) {
            dispatch(caravansActions.caravansSet(res.data.items))
            dispatch(caravansActions.filtersApplied())
        }
    } catch (e) {
        console.error(e)
        dispatch(caravansActions.errorSet())
    } finally {
        dispatch(caravansActions.isLoadingSet(false))
    }
}
