import { createSlice } from "@reduxjs/toolkit";
import { crudLocal, getData } from "./local";




const initialState = {
    userInfo: getData(),
  };
  
  
  
  const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
      addUser: (state, action) => {
        state.userInfo.push(action.payload);
        crudLocal(state.userInfo);
      }
  
    }
  });
  
  
  export const { addUser} = userSlice.actions;
  export default userSlice.reducer;