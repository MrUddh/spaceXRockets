import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ERROR, IDLE, LOADING } from './constants';
import { fetchRockets } from './rocketsAPI';

const initialState = {
  status: IDLE,
  allRockets: [],
};

export const getRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetchRockets();
  return response;
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,

  reducers: {
    toggleFavorite: (state, action) => {
      const rocketIndex = state.allRockets.findIndex(
        (rocket) => rocket.id === action.payload
      );

      if (!state.allRockets[rocketIndex]?.isFavorite) {
        state.allRockets[rocketIndex] = {
          ...state.allRockets[rocketIndex],
          isFavorite: true,
        };
      } else {
        state.allRockets[rocketIndex] = {
          ...state.allRockets[rocketIndex],
          isFavorite: !state.allRockets[rocketIndex]?.isFavorite,
        };
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.status = IDLE;
        state.allRockets = action.payload;
        console.log('state.allRocketsEXTRA', state.allRockets);
      })
      .addCase(getRockets.rejected, (state) => {
        state.status = ERROR;
        console.error('Error when fetching rockets!');
      });
  },
});

// Actions
export const { toggleFavorite } = rocketsSlice.actions;

// Selectors
export const selectStatus = (state) => state.rockets.status;
export const selectRockets = (state) => state.rockets.allRockets || [];
export const selectIsFavorite = (state, id) =>
  state.rockets?.allRockets.find((rocket) => rocket.id === id)?.isFavorite;

export default rocketsSlice.reducer;
