import "./App.css";

function App() {
  const  name=<h1>Vibha Thakur</h1>
  const age=<h2>24</h2>
  const user = <div className="App">
  {name}
  {age}
    </div>
  return (
    <div className="App">
    {user}
    {user}
      </div>
  );
}

export default App;
