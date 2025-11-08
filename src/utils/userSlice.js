import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    // Keep slice state simple: either null (not logged) or a user object
    initialState: null,
    reducers: {
       addUser:(state,action)=>{
           return action.payload;
       },
       removeUser: (state,action) => {
           return null;
       }
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
