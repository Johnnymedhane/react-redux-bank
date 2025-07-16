import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    fullName: "",
    nationalID: "",
    CreatedAt: '',
};


const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        createCustomer: {
            prepare(fullName, nationalID) {
                return {
                    payload: {
                        fullName,
                        nationalID,
                        CreatedAt: new Date().toLocaleString(),
                    },
                };
            },
            reducer(state, action) {
                state.fullName = action.payload.fullName;
                state.nationalID = action.payload.nationalID;
                state.CreatedAt = action.payload.CreatedAt;
            },
        },
        updateName(state, action) {
            state.fullName = action.payload;
        },
    },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

/*
export default function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                CreatedAt: action.payload.CreatedAt,
            };
        case "customer/updateName":
            return {
                ...state,
                fullName: action.payload
            };
        default:
            return state;
        
    }
}



export function createCustomer(fullName, nationalID) {
    return {
        type: "customer/createCustomer",
        payload: {
            fullName,
            nationalID,
            CreatedAt: new Date().toLocaleString(),
        }
    };
}
export function updateCustomer(fullName) {
    return {
        type: "customer/updateName",
        payload: fullName
    };
}
*/