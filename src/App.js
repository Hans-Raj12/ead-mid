import './App.css';
import Timer from './task_b/components/Timer';
function App() {
  return (
    <div className="App">
      {/* Task-B */}
      <Timer initial={10}/>
    </div>
  );
}

export default App;
