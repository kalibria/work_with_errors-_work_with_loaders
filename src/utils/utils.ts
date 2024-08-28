import {setErrorAC, setStatusAC} from "../app/app-reduser";
import {Dispatch} from "redux";
import { ResponseType } from '../api/todolists-api'

export const handleServerNetworkError = (dispatch: Dispatch, e: {message: string}) =>{
    dispatch(setErrorAC(e.message))
    dispatch(setStatusAC('failed'))
}

export const handleServerAppError = (dispatch: Dispatch, data: ResponseType) =>{
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
    dispatch(setStatusAC('failed'))
}