import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import entryService from './entryService';
const initialState = {
  entries: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getEntries = createAsyncThunk(
  'entry/getEntries',
  async (_, thunkAPI) => {
    try {
      return await entryService.getEntries(thunkAPI.getState().auth.user.token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createEntry = createAsyncThunk(
  'entry/createEntry',
  async (entryData, thunkAPI) => {
    try {
      return await entryService.createEntry(
        entryData,
        thunkAPI.getState().auth.user.token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getEntry = createAsyncThunk(
  'entry/getEntry',
  async (id, thunkAPI) => {
    try {
      return await entryService.getEntry(
        id,
        thunkAPI.getState().auth.user.token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateEntry = createAsyncThunk(
  'entry/updateEntry',
  async (id, updateData, thunkAPI) => {
    try {
      return await entryService.updateEntry(
        id,
        updateData,
        thunkAPI.getState().auth.user.token
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
const entrySlice = createSlice({
  name: 'entry',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEntry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEntry.fulfilled, (state, { payload }) => {
        state.entries.push(payload);
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(createEntry.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(getEntries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEntries.fulfilled, (state, { payload }) => {
        state.entries = payload;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(getEntries.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(getEntry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEntry.fulfilled, (state, { payload }) => {
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(getEntry.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(updateEntry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEntry.fulfilled, (state, { payload }) => {
        const entry = state.entries.find((a) => a.id === payload.id);
        entry = payload.updateData;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(updateEntry.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      });
  },
});
export const { reset } = entrySlice.actions;
export default entrySlice.reducer;
