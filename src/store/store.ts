import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector ,useDispatch} from "react-redux"
import { IAppState } from "./reducers/appSlice/appType"
import  appSlice  from "./reducers/appSlice/appSlice"

export interface IState{
    app:IAppState
}

export const store = configureStore({
    reducer: {
        app: appSlice,
    },
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch;
