import './App.css';
import Timer from './task_b/components/Timer';
import PollDisplay from './task_a/components/PollDisplay';
function App() {
  return (
    <div className="App">
    {/* Task->A */}
    <PollDisplay/>



      {/* Task-B */}
      {/* <Timer initial={10}/> */}
    </div>
  );
}

export default App;
