import React, { useReducer } from "react";
import TaskContext from './TaskContext';
import TaskReducer from "./TaskReducer";

const resp = [
    {
        group: 'My tasks',
        tasks: [
            {
                _id: 1,
                task: "I have to go outside",
                priority: "More less"
            },
            {
                _id: 2,
                task: "I have to do my homework",
                priority: "Normal"
            }
        ]
    }
];

const TaskState = (props) => {
    const initialState = {
        tasks: [],
        selectTask: null
    };

    const [state, dispatch] = useReducer(TaskReducer, initialState);
    const getTasks = () => {
        dispatch({
            type: 'GET_TASKS',
            payload: resp
        });
    }

    const updateTask = (priority, id) => {
        state.tasks[0].tasks[id].priority = priority;
        dispatch({
            type: 'UPDATE_TASK',
            payload: state.tasks
        });
    }

    const createTask = (task) => {
        task._id = state.tasks[0].tasks.length + 1;
        state.tasks[0].tasks.push(task);
        dispatch({
            type: 'CREATE_TASK',
            payload: state.tasks
        });
    }

    return (
        <TaskContext.Provider value={{
            tasks: state.tasks,
            selectTask: state.selectTask,
            getTasks,
            updateTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;