export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type SetStatusType = ReturnType<typeof setStatusAC>

const initialState = {
    status: 'loading' as RequestStatusType,
}

type InitialStateType = typeof initialState

export const appReducer = (
    state: InitialStateType = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return { ...state, status: action.status }
        default:
            return state
    }
}

export const setStatusAC = (status: RequestStatusType) => ({
    type:'APP/SET-STATUS',
    status
}as const)

export type ActionsType = SetStatusType