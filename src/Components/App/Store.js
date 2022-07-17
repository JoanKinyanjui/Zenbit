import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {usersApi} from '../Services/Services';

export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [usersApi.reducerPath]: usersApi.reducer,
    },
  
})

