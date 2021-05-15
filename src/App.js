import './App.css';
import TaskState from './context/tasks/TaskState';
import TasksList from './components/TasksList';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <h1>TO DO AND DRAGNDROP</h1>
      <hr />
      <TaskState>
        <div className="content">
          <div>
            <TasksList />
          </div>
          <div>
            <Task />
          </div>
        </div>
      </TaskState>
    </div>
  );
}

export default App;
