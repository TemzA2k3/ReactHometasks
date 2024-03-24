import ListRender from "./Components/ListRender";

import './App.css';

function App() {
  const shops = [
    "Maxima",
    "Rimi",
    "Iki"
  ]
  return (
    <div className="App">
      <ListRender shops={shops}/>
    </div>
  );
}

export default App;
