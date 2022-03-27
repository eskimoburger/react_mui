import { Button, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import Navbar from "./components/Navbar";

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.myButton,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
