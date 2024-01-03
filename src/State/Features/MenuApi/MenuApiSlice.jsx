import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMenuApiData = createAsyncThunk(
  'fetchMenuApiData',
  async () => {
    const response = await fetch(
      'https://e9stocrib1.execute-api.ap-southeast-2.amazonaws.com/MenuApi/menu'
    );
    return response.json();
  }
);

const menuApiSlice = createSlice({
  name: 'menuApi',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMenuApiData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMenuApiData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMenuApiData.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

export default menuApiSlice.reducer;
