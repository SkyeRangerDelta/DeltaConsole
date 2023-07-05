import './App.css'
import Home from "./comps/Home.tsx";
import {useEffect} from "react";

function App() {
  const bgs = [
      '../src/assets/img/bgs/jeremy-bishop-ocean.jpg',
      '../src/assets/img/bgs/bia-w-a-icefloe.jpg',
      '../src/assets/img/bgs/edbg.jpg',
      '../src/assets/img/bgs/TheRift.jpg'
  ]
  const rbg = Math.floor(Math.random() * bgs.length);
  const srcurl = bgs[rbg];

  useEffect(() => {
    document.body.style.backgroundImage = `url(${srcurl})`;
    document.body.style.height = '100%';
  }, []);
  return <Home />
}

export default App
