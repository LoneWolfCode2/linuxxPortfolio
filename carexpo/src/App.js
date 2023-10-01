import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Alert from "./components/Alert";
import { useLayoutEffect, useState } from "react";

function App() {
  const [first, setfirst] = useState(false);
  useLayoutEffect(() => {}, []);
  return (
    <div className="App bg-slate-400 min-h-screen flex items-start p-8 justify-center">
      <Button
        onClick={() => {
          console.log(first);
          setfirst(!first);
        }}
      >
        Click Here!
      </Button>
      <div className="mt-32 flex flex-col gap-4">
        <Checkbox label="This is checkbox with label" />
        <Checkbox />
        <div className="flex flex-col gap-2">
          <Alert type="info" title="Info" message="message" />
          <Alert type="danger" title="Danger" message="message" />
          <Alert type="dark" title="Dark" message="message" />
          <Alert type="success" title="Success" message="message" />
          <Alert type="warning" title="Warning" message="message" />
        </div>
      </div>
      {first && (
        <div className="absolute flex items-center items-center top-8 animate-in">
          <Alert type="danger" title="Danger" message="message" />
        </div>
      )}
    </div>
  );
}

export default App;
