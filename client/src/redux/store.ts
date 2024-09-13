import { configureStore  } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
    },
})

export type rootReducer = ReturnType<typeof store.getState>;

export default store;