import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    crypto: CryptoReducer,
  },
});