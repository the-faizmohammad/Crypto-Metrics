import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const CRYPTO_API = 'https://api.coinstats.app/public/v1/coins';

export const fetchCoins = createAsyncThunk(
  'crypto/fetchCoins',
  async () => {
    const response = await axios.get(CRYPTO_API);
    const coinData = response.data.coins.map((coin) => ({
      id: coin.id,
      img: coin.icon,
      name: coin.name,
      price: coin.price,
      rank: coin.rank,
      symbol: coin.symbol,
      marketCap: coin.marketCap,
      availableSupply: coin.availableSupply,
      contractAddress: coin.contractAddress,
      decimals: coin.decimals,
      priceBtc: coin.priceBtc,
      priceChange1d: coin.priceChange1d,
      priceChange1h: coin.priceChange1h,
      priceChange1w: coin.priceChange1w,
      totalSupply: coin.totalSupply,
      twitterUrl: coin.twitterUrl,
      volume: coin.volume,
      websiteUrl: coin.websiteUrl,
      show: false,
    }));
    return coinData;
  },
);

const initialState = {
  coins: [],
  status: 'idle',
  error: null,
  selectedCoin: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setShowCoin: (state, action) => {
      const selectedCoin = state.coins.find((coin) => coin.id === action.payload);
      if (selectedCoin) {
        state.coins.forEach((coin) => {
          coin.show = coin.id === action.payload;
        });
        state.selectedCoin = selectedCoin;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coins = action.payload;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllCoins = (state) => state.crypto.coins;
export const getCoinsStatus = (state) => state.crypto.status;
export const getCoinsError = (state) => state.crypto.error;
export const getSelectedCoin = (state) => state.crypto.selectedCoin;
export const { setShowCoin } = cryptoSlice.actions;
export default cryptoSlice.reducer;
