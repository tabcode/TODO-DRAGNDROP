import React from 'react';
import TaskContext from '../context/tasks/TaskContext';
import DragNDrop from './DragNDrop';

class TasksList extends React.Component {

    static contextType = TaskContext;

    componentDidMount() {
        this.context.getTasks();
    }

    render() {
        const { tasks } = this.context;
        return (
            <>
                <DragNDrop key="dragNdrop" tasks={tasks} />
            </>
        );
    }
}


export default TasksList;