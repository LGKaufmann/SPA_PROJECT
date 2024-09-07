import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any | null;
  token: string | null;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      // console.log("login", state.user, state.token);
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      // console.log("logind", state.user, state.token);
    },
    register: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      // console.log("logout", state.user, state.token);

      state.user = null;
      state.token = null;
      localStorage.removeItem("token");

      // console.log("logoutd", state.user, state.token);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default userSlice;

export const { login, logout, setLoading, register } = userSlice.actions;
