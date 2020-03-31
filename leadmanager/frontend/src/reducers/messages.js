import { GET_MESSAGES, CREATE_MESSAGE } from "../actions/types";

const intialState = {};

export default function (state = intialState, action) {
    switch (action.type) {
        case GET_MESSAGES:
            return action.payload;
        case CREATE_MESSAGE:
            return (state = action.payload);
        default:
            return state;
    }
}
//state = action.payload..we set entire state to what ever we pass in, which is a message object