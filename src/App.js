import { useState, useEffect} from "react";
import Image from "./components/image"
// import Box from "./box";
import SignOrLog from "./components/signOrLog";
import "./App.css";



const App = () => {
  const [user, setUser] = useState();
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

   
 // every time user's value changes, useEffect will run again
    useEffect(() =>{
      fetchImages();
    }, []);

//   for (let i=0; i < arr.length; i++) {
//     console.log(arr[i])
//   };

//   arr.map((item, index) => {
// xonole.log(item)
//   })
  // const useState = (initialVal) => {
  //   let state = initialVal;

  //   const setState =(newVal) => {
  //     state = newVal
  //   }
  //   return [state, setState];
  // }

  return (
    <div className="App">
     < SignOrLog setter={setUser} />
    <h1>{user}</h1>
      {user &&
      photos.map((item, i) => {
        return(
            <Image key={i} author={item.author} url={item.dowmload_url} />
      )})};
      </div>
  );
};
      
// {/*       
//       {/* <img src="https://picsum.photos/200/300" alt=""/> */}
//     {/* <Box name={user}/> */}
//     {/* {arr.map((item, i) => { */}
//       {/* return ( */}
//         {/* <div> */}
//           {/* <Box name={item.name} /> */}
//         {/* </div> */}
//       {/* ); */}
//     {/* })}; */}
//     {/* instead of three time box I can use .map */}
//     {/* <Box name="gary"/>
//     <Box name="clive"/>
//     <Box name="kevin"/> */}
//     {/* <input onChange={(event) => setUser(event.target.value)} /> */}
//     {/* if statement on its own */}
//     {/* {user && <Box name="tony" />} */}
//     {/* if else statment */}
//     {/* {user ? <Box name="jeff" /> : <Box name="not Jeff" />} */}
//     {/* </div> */}
//   {/* ) */}
// {/* }; */}

export default App;
