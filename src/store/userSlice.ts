import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user: [],
    userName: [],
    authenticated: false,
  },
  reducers: {
    addUser(state: any, action: any): void {
      const existUser = state.users.filter((el: any) => el.name === action.payload.value);
      const userParam = {
        id: Math.floor(Math.random() * Date.now()),
        name: action.payload.value,
      };

      if (!existUser) {
        state.users.push(userParam);
      }
      state.user = userParam;
      state.authenticated = true;
    },

    signOut(state: any): void {
      state.user = null;
      state.userName = null;
      state.authenticated = false;
    },

    checkName(state: any, action: any): void {
      const currName = action.payload.name === state.user.name ? state.user.name : action.payload.name;
      state.userName = {
        name: currName ,
      };
    },
  },
});

export const { addUser, signOut, checkName } = userSlice.actions;

export default userSlice.reducer;
