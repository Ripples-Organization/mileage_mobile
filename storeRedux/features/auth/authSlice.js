import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../../utils/apiService";

const initialState = {
  isAuthenticated: false,
  user: {},
  error: null,
  profile: {},
  completeUserProfile: {},
  couponCategories: [],
  cars: [],
  trips: [],
};

// First, create the thunk
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  const response = await apiService.login(data);
  return response.data;
});

export const addCar = createAsyncThunk("auth/addCar", async (data) => {
  const response = await apiService.createCar(data);
  return response.data;
});

export const createAccount = createAsyncThunk(
  "auth/createAccount",
  async (data) => {
    const response = await apiService.createUser(data);
    return response.data;
  }
);

export const getAllCars = createAsyncThunk("auth/getCar", async (data) => {
  const response = await apiService.getAllCars(data);
  return response.data;
});

export const getAllTrips = createAsyncThunk(
  "auth/getAllTrips",
  async (data) => {
    const response = await apiService.getAllTrips(data);
    return response.data;
  }
);



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = initialState;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    // we only set the state if the promise is fulfilled
    [loginUser.fulfilled]: (state, action) => {
      state.isAuthenticated = action.payload.success;
      state.user = { ...action.payload.data, token: action.payload.token };
    },

    [createAccount.fulfilled]: (state, action) => {
      state.isAuthenticated = action.payload.success;
      state.user = action.payload.data;
    },

    [getAllCars.fulfilled]: (state, action) => {
      state.isAuthenticated = action.payload.success;
      state.cars = action.payload.data;
    },

    [getAllTrips.fulfilled]: (state, action) => {
      state.isAuthenticated = action.payload.success;
      state.trips = action.payload.data;
    },

    [addCar.fulfilled]: (state, action) => {
      state.cars = action.payload.data;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
