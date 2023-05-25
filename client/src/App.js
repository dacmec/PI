import './App.css';
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";
import Landing from './views/Landing/Landing'
import Home from "./views/Home/Home";
//import About from './components/About/About'
import {  Switch, Route,  } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';



function App() {
  return (
<BrowserRouter>
    <div className="App">
      <Switch>
      
        
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        {/* <Route path="/about" component={About} /> */}
         {/* <Route path="/about" element={<About/>} />  */}
         <Route path="/create" component={Create} />  
         <Route path="/detail" component={Detail} /> 
         
        
         </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
