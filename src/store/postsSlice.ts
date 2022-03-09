import { createSlice } from '@reduxjs/toolkit';
import { IPosts } from './IPosts';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    addPost(state: { posts: IPosts[] }, action: any): void {
      state.posts.push({
        id: Math.floor(Math.random() * Date.now()),
        name: action.payload.user.name,
        message: action.payload.post,
        likes: [],
      });
    },
    likePost(state: { posts: IPosts[] }, action: any): void {
      const index = state.posts.findIndex((p) => p.id === action.payload.id);

      const isLike = state.posts[index].likes.find((name) => name === action.payload.user.name);

      if (!isLike) {
        state.posts[index].likes = [...state.posts[index].likes, action.payload.user.name];
      }
    },
  },
});

export const { addPost, likePost } = postSlice.actions;

export default postSlice.reducer;
