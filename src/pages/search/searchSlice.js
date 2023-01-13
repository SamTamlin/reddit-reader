import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSearch = createAsyncThunk(
    'search/getSearch',
    async (search='cats') => {
        const response = await fetch(
            `https://www.reddit.com/search.json?q=${search}`);
        const json = await response.json();
        return json;
    }
);

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResult: {},
        isLoadingSearchResult: false,
        failedToLoadSearchResult: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(getSearch.pending, (state) => {
            state.isLoadingSearchResult = true;
            state.failedToLoadSearchResult = false;
        })
        .addCase(getSearch.rejected, (state) => {
            state.isLoadingSearchResult = false;
            state.failedToLoadSearchResult = true;
        })
        .addCase(getSearch.fulfilled, (state, action) => {
            state.isLoadingSearchResult = false;
            state.failedToLoadSearchResult = false;
            state.searchResult = action.payload.data;
        })
    }
});

export const getSearchChildren = state => state.search.searchResult.children;
export const isLoading = state => state.search.isLoadingSearchResult;
export const failedToLoad = state => state.search.failedToLoadSearchResult;

export default searchSlice.reducer;
