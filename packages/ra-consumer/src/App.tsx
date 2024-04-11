import "./App.css";

import { Counter } from "ra_producer/Counter";

const App = () => {
  return (
    <div className="content">
      <h1>Consumer</h1>
      <Counter initialValue={500} step={40} />
    </div>
  );
};

export default App;
