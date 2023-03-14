import { Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Route path="/home" component={NavBar} />
      <Route exact path ='/home/detail/:id' component={Detail}/>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home/about" component={About} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/form" component={CreateRecipe} />
    </div>
  );
}

export default App;
