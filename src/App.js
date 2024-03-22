import TestComponent from "./Components/TestComponent";

import './App.css';

function App() {
  const shops = [
    "Maxima",
    "Rimi",
    "Iki"
  ]
  return (
    <div className="App">
      <TestComponent shops={shops}/>
    </div>
  );
}

export default App;
