import { useFormStatus } from "react-dom";

// creamos una simulación de llamada asíncrona
export async function submitForm(_query) {
  await new Promise((res) => setTimeout(res, 1000));
}

function Submit() {
  // tener en cuenta que useFormStatus NO devuelve el estado del form si se encuentra en el mismo componente
  // por eso conviene llamarlo DENTRO del form
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function Form({ action }) {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}

export function UseFormStatusExample() {
  return <Form action={submitForm} />;
}
