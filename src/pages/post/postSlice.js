import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    'post/getPost',
    async (params) => {
        const response = await fetch(
            `https://www.reddit.com/r/${params.subreddit}/comments/${params.id}/${params.postLink}.json`);
        const json = await response.json();
        return json;
    },
);

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: {},
        isLoadingPost: false,
        failedToLoadPost: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPost.pending, (state) => {
            state.isLoadingPost = true;
            state.failedToLoadPost = false;
        })
        .addCase(getPost.rejected, (state) => {
            state.isLoadingPost = false;
            state.failedToLoadPost = true;
        })
        .addCase(getPost.fulfilled, (state, action) => {
            state.isLoadingPost = false;
            state.failedToLoadPost = false;
            state.post.header = action.payload[0].data;
            state.post.comments = action.payload[1].data;
        })
    }
});

export const getHeader = state => state.post.post.header;
export const getComments = state => state.post.post.comments;
export const isLoadingPost = state => state.post.isLoadingPost;
export const failedToLoadPost = state => state.post.failedToLoadPost;

export default postSlice.reducer;
