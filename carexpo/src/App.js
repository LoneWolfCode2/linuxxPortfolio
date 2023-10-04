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
import Avatar from "./components/Avatar";
import TextField from "./components/TextField";
import ToggleButtonGroup from "./components/ToggleButtonGroup";
import FormatLeftIcon from "./components/FormatLeftIcon";
import ToggleButton from "./components/ToggleButton";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemButton from "./components/ListItemButton";
import ListItemText from "./components/ListItemText";

function App() {
  const [first, setfirst] = useState(false);
  const [alignment, setAlignment] = useState("left");
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleAlignment = (event) => {
    setAlignment(event);
  };

  return (
    <div className="App absolute w-full h-fit -z-20 dark:bg-slate-900 min-h-screen flex items-start p-8 justify-center">
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
        <Avatar alt="something alt" sx={{ backgroundColor: "red" }}>
          OP
        </Avatar>
        <Avatar
          alt="something alt"
          src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
        />
        <Avatar variant="square" alt="something alt">
          io
        </Avatar>
        <TextField id label="Please enter some text" variant />
        <TextField id label="Email" variant />
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text-alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="left aligned">
            <FormatLeftIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="left aligned">
            <FormatLeftIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <List>
          <ListItem>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(e) => handleListItemClick(e, 0)}
            >
              <ListItemIcon>
                <FormatLeftIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(e) => handleListItemClick(e, 1)}
            >
              <ListItemIcon>
                <FormatLeftIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <FormatLeftIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </div>
      <AnimatePresence>
        {first && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              top: 16,
              left: "auto",
              right: "auto",
            }}
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
