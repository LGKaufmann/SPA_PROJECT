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
    userData: (state, action) => {
      state.user = action.payload;
    },
    login: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    register: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default userSlice;

export const { login, logout, setLoading, register, userData } =
  userSlice.actions;
