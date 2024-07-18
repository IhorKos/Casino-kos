import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../../entities/user/slices/userSlice'
import { userApi } from '../../entities/user/api/userApi'
import rouletteSlice from '../../games/roulette/slices/rouletteSlice'
import walletSlice from '../../entities/wallet/slices/walletSlice'
// ...

export const store = configureStore({
  reducer: {
    user: userSlice,
    wallet: walletSlice,
    roulette: rouletteSlice,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch