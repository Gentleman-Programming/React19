import { useFormState } from "react-dom";

async function increment(previousState, _formData) {
  return previousState + 1;
}

export function UseFormStateExample() {
  const [state, formAction] = useFormState(increment, 0);

  return (
    <form action={formAction}>
      {state}
      <button type="submit">Increment</button>
    </form>
  );
}
