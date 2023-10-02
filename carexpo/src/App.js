import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Alert from "./components/Alert";
import { useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ButtonGroup from "./components/ButtonGroup";
import FAB from "./components/FAB";
import RadioGroup from "./components/RadioGroup";
import Radio from "./components/Radio";
import Rating from "./components/Rating";

function App() {
  const [first, setfirst] = useState(false);

  return (
    <div className="App dark:bg-slate-900 min-h-screen flex items-start p-8 justify-center">
      <Button
        onClick={() => {
          setfirst(!first);
        }}
      >
        Click Here!
      </Button>
      <div className="mt-32 flex flex-col gap-4">
        <Checkbox label="This is checkbox with label" />
        <Checkbox label="This is a second label" />
        <Checkbox />
        <div className="flex flex-col gap-2">
          <Alert type="info" title="Info" message="message" />
          <Alert type="danger" title="Danger" message="message" />
          <Alert type="dark" title="Dark" message="message" />
          <Alert type="success" title="Success" message="message" />
          <Alert type="warning" title="Warning" message="message" />
        </div>
        <ButtonGroup>
          <Button>Option 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
          <Button>Button 4</Button>
        </ButtonGroup>
        <FAB variant="extended">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2L4.5 20.29l.71.71L12 18l6.79 3l.71-.71z"
            />
          </svg>
          Navigate
        </FAB>
        <RadioGroup
          name="unique-name"
          options={["Driver License", "State ID"]}
        />
        <RadioGroup
          name="unique-nameeee"
          options={["US Military", "US Passport"]}
        />
        <Rating value={2} />
      </div>
      <AnimatePresence>
        {first && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Alert type="danger" title="Danger" message="message" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
