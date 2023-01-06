import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPostList = createAsyncThunk(
    'postList/getPostList',
    async (subreddit) => {
        const response = await fetch(
            `https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        return json;
    }
);

export const postListSlice = createSlice({
    name: 'postList',
    initialState: {
        postList: {},
        isLoadingPostList: false,
        failedToLoadPostList: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPostList.pending, (state) => {
            state.isLoadingPostList = true;
            state.failedToLoadPostList = false;
        })
        .addCase(getPostList.rejected, (state) => {
            state.isLoadingPostList = false;
            state.failedToLoadPostList = true;
        })
        .addCase(getPostList.fulfilled, (state, action) => {
            state.isLoadingPostList = false;
            state.failedToLoadPostList = false;
            state.postList = action.payload.data;
        })
    }
});

export const getChildren = state => state.postList.postList.children;
export const isLoading = state => state.postList.isLoadingPostList;

export default postListSlice.reducer;
