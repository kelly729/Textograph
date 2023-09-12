// import logo from "./logo.svg";
import "./styles.css";
import "./light.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "./component/Grid";
import { Input } from "./component/input";
import { Navbar } from "./component/Navbar";
import { Modal } from "./component/modal";
import { Hero } from "./component/Hero";
function App() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("futuristic");
  const [ismodalOpen, setisModalOpen] = useState(false);
  const [selectedItem, setSelecteditem] = useState();
  const [Theme,setTheme]=useState("dark")
  

 
  useEffect(() => {
    axios.get(`https://lexica.art/api/v1/search?q=${query}`).then((data) => {
      setResults(data.data.images);
    });
  }, [query]);
  // console.log(results)

  const handleSearch = () => {
    setQuery(input);
    console.log(query);
    setInput("")
  };

  const openModal = (select) => {
    setSelecteditem(select);
    setisModalOpen(true);
    
  };

  const closeModal = () => {
    setisModalOpen(false);
  };
  const handleTheme=()=>{
   
   setTheme((curr)=>(curr === "dark"?"light":"dark"))
  }
  console.log(selectedItem);
  return (
    <div className={Theme}>
      <Navbar Theme={Theme} handleTheme={handleTheme}   ismodalOpen={ismodalOpen} handleSearch={handleSearch} setInput={setInput} />
      <Hero/>
      <Grid  ismodalOpen={ismodalOpen} results={results} openModal={openModal} />
      {ismodalOpen && <Modal ismodalOpen={ismodalOpen} closeModal={closeModal} selectedItem={selectedItem} />}
    </div>
  );
}

export default App;
