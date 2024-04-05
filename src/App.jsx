import "./App.css";
import {
  UseActionStateExample,
  UseExample,
  UseFormStatusExample,
  UseOptimisticExample,
} from "./components";

function App() {
  return (
    <>
      <h2>Use</h2>
      <UseExample />
      <h2>UseFormStatus</h2>
      <UseFormStatusExample />
      <h2>UseActionState</h2>
      <UseActionStateExample />
      <h2>UseOptimistic</h2>
      <UseOptimisticExample />
    </>
  );
}

export default App;
