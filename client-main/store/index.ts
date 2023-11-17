import { configureStore } from '@reduxjs/toolkit'
import toggleReducer from './toggleCreate/ToggleCreate'
import CategoryReducer from './chouseCategory/ChouseCategory'
import apiReducer from './getAllStudents/GetAllStudents'
import groupReducer from './chouseGroup/ChouseGroup'
import showVdReducer from './showVd/ShowVd'
import showSearchReducer from './showSearch/ShowSearch'

export const store = configureStore({
    reducer: {
        toggle: toggleReducer,
        category: CategoryReducer,
        api: apiReducer,
        group: groupReducer,
        showVd: showVdReducer,
        searchShow: showSearchReducer
    },
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch