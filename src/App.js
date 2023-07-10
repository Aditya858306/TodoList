import "./App.css";
import CssBaseLine from "@mui/material/CssBaseline";
import TodosList from "./TodosList";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <CssBaseLine />
      <Navbar />
      <TodosList />
    </>
  );
}

export default App;
