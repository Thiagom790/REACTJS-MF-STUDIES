import "./App.css";
import { Counter } from "./Counter";

const App = () => {
  return (
    <div className="content">
      <h1>Producer</h1>
      <Counter step={10} />
    </div>
  );
};

export default App;
