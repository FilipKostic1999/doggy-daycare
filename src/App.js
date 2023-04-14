import { HashRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome"
import Home from "./components/Home"
import SingleDog from "./components/SingleDog"


function App() {
  return (
    <>
      <HashRouter>
      <Routes>
       <Route path="/" element={<Welcome />} />
       <Route path="/Home" element={<Home />}></Route>
       <Route path="/:name" element={<SingleDog />}></Route>
        </Routes>
        </HashRouter>
    </>
  );
}

export default App;
