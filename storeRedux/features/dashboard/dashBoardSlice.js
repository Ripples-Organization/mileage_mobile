import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../../utils/apiService";

const initialState = {
  cars: [],
  trips: [],
};

// First, create the thunk

export const addCar = createAsyncThunk("dashboard/addCar", async (data) => {
  const response = await apiService.createCar(data);
  return response.data;
});

export const addTrip = createAsyncThunk("dashboard/addTrip", async (data) => {
  const response = await apiService.createTrip(data);
  return response.data;
});

export const getAllCars = createAsyncThunk(
  "dashboard/getAllCar",
  async (data) => {
    const response = await apiService.getAllCars(data);
    return response.data;
  }
);

export const getAllTrips = createAsyncThunk(
  "dashboard/getAllTrips",
  async (data) => {
    const response = await apiService.getAllTrips(data);
    return response.data;
  }
);

export const getSingleCar = createAsyncThunk(
  "dashboard/getSingleCar",
  async (data) => {
    const response = await apiService.getSingleTrip(data);
    return response.data;
  }
);

export const getSingleTrip = createAsyncThunk(
  "dashboard/getSingleTrip",
  async (data) => {
    const response = await apiService.getSingleTrip(data);
    return response.data;
  }
);

const dashBoardSlice = createSlice({
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

    [addCar.fulfilled]: (state, action) => {
      state.cars = action.payload.data;
    },
    [getAllCars.fulfilled]: (state, action) => {
      state.cars = action.payload.data;
    },
    [addTrip.fulfilled]: (state, action) => {
      state.trips = action.payload.data;
    },

    [getAllTrips.fulfilled]: (state, action) => {
      state.trips = action.payload.data;
    },

    [getSingleTrip.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { logout } = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
