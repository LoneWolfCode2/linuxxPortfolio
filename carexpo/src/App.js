import "./App.css";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Alert from "./components/Alert";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ButtonGroup from "./components/ButtonGroup";
import FAB from "./components/FAB";
import RadioGroup from "./components/RadioGroup";
import Rating from "./components/Rating";
import Avatar from "./components/Avatar";
import ToggleButtonGroup from "./components/ToggleButtonGroup";
import FormatLeftIcon from "./components/FormatLeftIcon";
import ToggleButton from "./components/ToggleButton";
import SelectOption from "./components/SelectOption";
import TextField from "./components/TextField";
import Switch from "./components/Switch";
import LinearProgress from "./components/LinearProgress";
import Slider from "./components/Slider";
import Progress from "./components/Progress";
import Select from "./components/Select";
import Badge from "./components/Badge";
import MailIcon from "./components/MailIcon";
import Chip from "./components/Chip";
import TrashCanIcon from "./components/TrashCanIcon";
import Divider from "./components/Divider";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemButton from "./components/ListItemButton";
import ListItemText from "./components/ListItemText";

function App() {
  const [first, setfirst] = useState(false);
  const [alignment, setAlignment] = useState("left");
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const [country, setcountry] = useState("");
  const handleDelete = (e) => {
    alert("You clicked the delete icon.");
    console.log(e);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
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
        <Slider value={value} onChange={(e) => setValue(e.target.value)} />
        <div className="text-white">Value: {value}</div>
        <Progress variant="determinate" label value={progress} />
        <Progress color="#c31515" variant="determinate" value={progress} />
        <Progress color="#15c315" variant="determinate" value={progress} />
        <LinearProgress
          color="#444cf7"
          variant="determinate"
          value={progress}
          label
        />
        <LinearProgress
          color="#ef0067"
          variant="determinate"
          value={progress}
        />
        <Select
          labelId="labelId"
          value={country}
          label="Countries"
          onChange={(e) => setcountry(e.target.value)}
        >
          <SelectOption value="US">United States</SelectOption>
          <SelectOption value="CA">Canada</SelectOption>
          <SelectOption value="FR">France</SelectOption>
          <SelectOption value="DE">Germany</SelectOption>
        </Select>
        <Switch />
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
        <Badge badgeContent={15} color="#444cf7">
          <MailIcon fill="white" />
        </Badge>
        <Chip
          label="Chip Filled"
          onDelete={handleDelete}
          deleteIcon={<TrashCanIcon fill="#FFF" />}
        />
        <Chip
          avatar={
            <Avatar
              alt="something alt"
              src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            />
          }
          label="Chip Outlined"
          variant="outlined"
        />
        <div className="w-full bg-slate-200 rounded-xl">
          <div className="">This is</div>
          <Divider />
          <div className="">a devider</div>
        </div>
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
