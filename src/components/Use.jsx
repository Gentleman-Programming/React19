import { Suspense, createContext, use, useState } from "react";

const ThemeContext = createContext(null);

function Form() {
  return (
    <Panel title="Welcome">
      <Button show={true}>Sign up</Button>
      <Button show={false}>Log in</Button>
    </Panel>
  );
}

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function fetchMessage() {
  return new Promise((resolve) => setTimeout(resolve, 1000, "⚛️"));
}

export const UseExample = () => {
  const theme = use(ThemeContext);
  const [messagePromise, setMessagePromise] = useState(null);
  const [show, setShow] = useState(false);

  function download() {
    setMessagePromise(fetchMessage());
    setShow(true);
  }

  if (show) {
    return (
      <Suspense fallback="Loading...">
        Here is the message: {messagePromise}
      </Suspense>
    );
  } else {
    return <button onClick={download}>Download</button>;
  }
};
