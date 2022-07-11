import { useState, useEffect} from "react";
import './App.css';
import Box from "./box";

const App = () => {
  const [user, setUser] = useState("steve");

  // const useState = (initialVal) => {
  //   let state = initialVal;

  //   const setState =(newVal) => {
  //     state = newVal
  //   }
  //   rteurn [state, setState];
  // }

  return (
    <div className="App">
    <Box name={user}/>
    <Box name="gary"/>
    <Box name="clive"/>
    <Box name="kevin"/>
    <input onChange={(event) => setUser(event.target.value)} />
    {/* if statement on its own */}
    {user && <Box name="tony" />}
    {/* if else statment */}
    {user ? <Box name="jeff" /> : <Box name="not Jeff" />}
    </div>
  )
};

export default App;
