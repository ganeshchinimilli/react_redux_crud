import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "./data";

const userSlice = createSlice({
    name: "users",
    initialState: usersList,
    reducers: {
        addUser: (state, action) => {
            console.log(action,state);
            state.push(action.payload);
        },
        deleteUser: (state, action) => {
            return state.filter((user) => user.id !== action.payload);
        },
        updateUser: (state, action) => {
            console.log(state, action);
            const uu = state.find((user)=>{return user.id == action.payload.id});
            if (uu) {
                uu.name = action.payload.name;
                uu.username = action.payload.username;
                uu.email = action.payload.email;
            }
        }
        
    }
})
export const { addUser,updateUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;