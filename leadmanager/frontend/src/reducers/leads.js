//a reducer is a function that takes in action --> sends down certain state; depends on what action does.
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "../actions/types.js";

//once we made the leads.js inside src/actions/leads.js then  --> now we create initial state

//were fetching leads from our backend, but we could put anything we want
const initialState = {
    leads: []

}

//From  folder/types --> create new action
//lead.js, import it & create it's function that affects server first and then UI
//then here: now these functions dispatch actions to the in reducers/leads.js & add the case (Get,DELETE,ADD

//more details below

// action below --> well have a leads/action  file we fire off functions & dispatch action to reducer; to get leads etc
//need to evaluate action type sent ; could use iff statement but we use switch
//the ... is called spared operator, and servers to indicate "give whatever else is in leads"
//payload --> when we create actions and dispatch to this file, to this reducer

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            };
        case DELETE_LEAD:
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !==
                    action.payload)
            };
        case ADD_LEAD:
            return {
                ...state,
                leads: [...state.leads, action.payload]
            };
        default:
            return state;
    }

}
