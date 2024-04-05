import { useActionState, useRef } from "react";

async function increment(state) {
  return state + 1;
}

async function increment2(state) {
  return state + 1;
}

export function UseActionStateExample() {
  // como no se sabe si el desarrollador utiliza el valor del pending state, este siempre pondrá isPending al inicio de la cadena de acciones, haciendo que haya un update del state de más
  // también el pending state pertenece a la accion, no al handler, este comienza cuando se retorna la acción despachada y se revertirá luego de que todas las acciones y transisiones hayan sido establecidas
  const [state, action, isPending] = useActionState(increment, 0);

  async function handleSubmit() {
    await increment2();

    // el estado de pending todavía no inicia hasta que se realice la siguiente acción
    await action();
  }

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
      {state}
    </div>
  );
}
