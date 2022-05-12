import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  pizzas: [],
  pizzasLoadingStatus: 'idle',
}

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    
  }
})