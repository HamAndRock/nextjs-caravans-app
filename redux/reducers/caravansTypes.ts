import { initialState, caravansActions } from "./caravansReducer";
import { BaseThunkType, InferActionsTypes } from "../storeTypes";

export type CaravansReducerInitialStateType = typeof initialState
export type CaravansReducerActionTypes = InferActionsTypes<typeof caravansActions>
export type CaravansReducerThunkTypes = BaseThunkType<CaravansReducerActionTypes>
