import { GET_TASKS, UPDATE_TASK, CREATE_TASK } from '../types';

export default function TaskReducer(state, action) {
    const { payload, type } = action;
    switch (type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: payload
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasks: payload
            }
        case CREATE_TASK:
            return {
                ...state,
                tasks: payload
            }
        default:
            return state;
    }
}