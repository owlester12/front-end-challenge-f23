import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { Course } from "../interfaces";

export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        primCart: [] as Course[],
        altCart: [] as Course[],
        filter: [true, true, true, true],
        theSearch: "",
        isPrimCart: true,
        description: 0

    },
    reducers:{
        addPrimCart: (state, action: PayloadAction<Course>) => {
            state.primCart = [action.payload, ...state.primCart];
          },
        delPrimCart : (state, action:PayloadAction<number>) =>{
            state.primCart = state.primCart.filter((entry) => {
                return entry.number !== action.payload
            })
        },
        reOrderPrimCart : (state, action:PayloadAction<Course[]>) => {
            state.primCart = action.payload;
        },
        addAltCart: (state, action: PayloadAction<Course>) => {
            state.altCart = [action.payload, ...state.altCart];
          },
        delAltCart : (state, action:PayloadAction<number>) =>{
            state.altCart = state.altCart.filter((entry) => {
                return entry.number !== action.payload
            })
        },
        reOrderAltCart : (state, action:PayloadAction<Course[]>) => {
            state.altCart = action.payload;
        },
        setFilter: (state, action:PayloadAction<number> ) => {
            state.filter[action.payload] = !state.filter[action.payload]
        },
        setSearch: (state, action:PayloadAction<string>) => {
            state.theSearch = action.payload
        },
        setIsPrimCart: (state) => {
            state.isPrimCart = !state.isPrimCart
        },
        setDescription: (state, action:PayloadAction<number>) => {
            state.description = action.payload
        }


    }
});

export const {addPrimCart, delPrimCart, reOrderPrimCart, addAltCart, delAltCart, reOrderAltCart, setFilter, setSearch, setIsPrimCart, setDescription} = cartSlice.actions;

export default cartSlice.reducer;