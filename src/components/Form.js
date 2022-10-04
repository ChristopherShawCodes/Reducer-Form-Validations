import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: "",
        error: null 
    },
    lastName: {
        value: "",
        error: null
    },
    email: {
        value: "",
        error: null 
    },
    hasBeenSubmitted: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FIRSTNAME_VALUE":
            return {
                ...state,
                firstName: {
                    ...state.firstName,  
                    value: action.payload
                }
            }
        case "SET_FIRSTNAME_ERROR":
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    error: action.payload
                }
            }
        case "SET_LASTNAME_VALUE":
            return {
                ...state,
                lastName: {
                    ...state.lastName,  
                    value: action.payload
                }
            }
        case "SET_LASTNAME_ERROR":
            return {
                ...state,
                lastName: {
                    ...state.lastName,
                    error: action.payload
                }
            }
        case "SET_EMAIL_VALUE":
            return {
                ...state,
                email: {
                    ...state.email,  
                    value: action.payload
                }
            }
        case "SET_EMAIL_ERROR":
            return {
                ...state,
                email: {
                    ...state.email,
                    error: action.payload
                }
            }
        case "SET_SUBMITTED_BOOLEAN":
            return {
                ...state,
                hasBeenSubmitted: action.payload
            }
        default:
            return state;
    }
}
export default () => {
    //  We call the useReducer function. and feed it the reducer function and initialState.
    //  This function will return an array with a state variable ("state") which will hold 
    //  the CURRENT value of our app's state, and the dispatch fn ("dispatch") which
    //  will dispatch our action to our reducer.
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleFirstNameChange = (e) => {
        // if length of input value (e.target.value) is less than 5, dispatch action to set email error
        if (e.target.value.length < 5) { 
            dispatch({
                type: "SET_FIRSTNAME_ERROR",
                payload: "First Name must be at least 5 characters"
            });
        } else {
        // if length of input value is >= 5, the else block will be hit and we will dispatch action to set email error   
        // back to an empty string
           dispatch({
                type: "SET_FIRSTNAME_ERROR",
                payload: ""
            });
        }
        // Regardless of what the length of the input is, we still need to dispatch an action to update 
        // state.email.value with current value of email input
        dispatch({
            type: "SET_FIRSTNAME_VALUE", 
            payload: e.target.value 
        });
    }
    const handleLastNameChange = (e) => {
        // if length of input value (e.target.value) is less than 5, dispatch action to set email error
        if (e.target.value.length < 5) { 
            dispatch({
                type: "SET_LASTNAME_ERROR",
                payload: "Last Name must be at least 5 characters"
            });
        } else {
        // if length of input value is >= 5, the else block will be hit and we will dispatch action to set email error   
        // back to an empty string
           dispatch({
                type: "SET_LASTNAME_ERROR",
                payload: ""
            });
        }
        // Regardless of what the length of the input is, we still need to dispatch an action to update 
        // state.email.value with current value of email input
        dispatch({
            type: "SET_LASTNAME_VALUE", 
            payload: e.target.value 
        });
    }
    const handleEmailChange = (e) => {
        // if length of input value (e.target.value) is less than 5, dispatch action to set email error
        if (e.target.value.length < 5) { 
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: "Email must be at least 5 characters"
            });
        } else {
        // if length of input value is >= 5, the else block will be hit and we will dispatch action to set email error   
        // back to an empty string
           dispatch({
                type: "SET_EMAIL_ERROR",
                payload: ""
            });
        }
        // Regardless of what the length of the input is, we still need to dispatch an action to update 
        // state.email.value with current value of email input
        dispatch({
            type: "SET_EMAIL_VALUE", 
            payload: e.target.value 
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // When form is submitted, dispatch action to set setSubmittedBoolean to true, indicating form submission
        dispatch({
            type: "SET_SUBMITTED_BOOLEAN",
            payload: true
        })
    }
 
    return (
        <div>
            {state.hasBeenSubmitted?<h3>Form has been submitted!</h3> : null} 
            <form onSubmit={handleSubmit}>
                <div id="firsName">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName"
                        onChange={(e) => handleFirstNameChange(e)}
                    />
                    {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>)}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName"
                        onChange={(e) => handleLastNameChange(e)}
                    />
                    {state.lastName.error !== null && (
                    <p className="error">{state.lastName.error}</p>)}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email"
                        onChange={(e) => handleEmailChange(e)}
                    />
                    {state.email.error !== null && (
                    <p className="error">{state.email.error}</p>)}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}