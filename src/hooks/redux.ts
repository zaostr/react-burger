import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch, AppThunk } from '../services/types'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch | AppThunk = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector