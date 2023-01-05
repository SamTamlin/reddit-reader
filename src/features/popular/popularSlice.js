import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPopular = createAsyncThunk(
    'popular/getPopular',
    async () => {
        const response = await fetch(
            'https://www.reddit.com/r/popular.json');
        const json = await response.json();
        return json;
    }
);

export const popularSlice = createSlice({
    name: 'popular',
    initialState: {
        popular: {},
        isLoadingPopluar: false,
        failedToLoadPopular: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPopular.pending, (state) => {
            state.isLoadingPopluar = true;
            state.failedToLoadPopular = false;
        })
        .addCase(getPopular.rejected, (state) => {
            state.isLoadingPopluar = false;
            state.failedToLoadPopular = true;
        })
        .addCase(getPopular.fulfilled, (state, action) => {
            state.isLoadingPopluar = false;
            state.failedToLoadPopular = false;
            state.popular = action.payload.data;
        })
    }
});

export const getChildren = state => state.popular.popular.children;
export const isLoading = state => state.popular.isLoadingPopluar;

export default popularSlice.reducer;