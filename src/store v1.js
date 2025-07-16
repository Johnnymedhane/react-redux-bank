import { type } from "@testing-library/user-event/dist/type";
import { combineReducers, createStore } from "redux";



const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};


const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    CratedAT: '',
};

function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload,
            };
        case "account/withdraw":
            return {
                ...state,
                balance: state.balance - action.payload,
            };
        case "account/requestLoan":
            if(state.loan > 0) return state; // Prevent multiple loans
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            };

        case "account/repayLoan":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            };
        default:
            return state;
    }
}

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                CratedAT: action.payload.CratedAT,
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


const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
});
 export const store = createStore(rootReducer);
// store.dispatch({ type: "account/deposit", payload: 1000 });
// console.log("Initial state:", store.getState());
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log("State after withdrawal:", store.getState());

// store.dispatch({
//     type: "account/requestLoan",
//     payload: { amount: 1000, purpose: "Home Renovation" }
// });

// console.log("State after loan request:", store.getState());

// store.dispatch({ type: "account/repayLoan", payload: 1000 });
// console.log("State after loan repayment:", store.getState());



function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
    return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
    return { type: "account/requestLoan", payload: { amount, purpose } };
}

function repayLoan() {
    return { type: "account/repayLoan" };
}



store.dispatch(deposit(1000));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(1000, "Home Renovation"));
store.dispatch(repayLoan());

console.log("Initial state:", store.getState());


function createCustomer(fullName, nationalID) {
    return {
        type: "customer/createCustomer",
        payload: {
            fullName,
            nationalID,
            CratedAT: new Date().toISOString(),
        }
    };
}
function updateCustomer(fullName) {
    return {
        type: "customer/updateName",
        payload: fullName
    };
}


store.dispatch(createCustomer("John Doe", "123456789"));
store.dispatch(updateCustomer("Jane Doe"));
console.log("State after customer creation:", store.getState());