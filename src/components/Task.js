import { useContext } from 'react';
import TaskContext from '../context/tasks/TaskContext';

function Task() {
    const { createTask } = useContext(TaskContext);
    const onSubmit = (e) => {
        e.preventDefault();
        let task = {
            task: e.target[0].value,
            priority: e.target[1].value
        }
        createTask(task);
    }
    return (
        <>
            <div className="card">
                <div>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <h2>New Task</h2>
                        <div className="newTask">
                            <div className="row">
                                <label>Task:</label>
                                <input type="text" />
                            </div>

                            <div className="row">
                                <label>Priority:</label>
                                <select>
                                    <option value="Don't Worry">Don't Worry</option>
                                    <option value="More less">More less</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Important">Important</option>
                                </select>
                            </div>

                            <div className="row">
                                <button type="submit">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Task;