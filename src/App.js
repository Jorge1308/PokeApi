
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import List from './components/list';
import MostrarPokemon from './components/mostrarPokemon';


function App() {
  return (
    <>
    <Router>
      <Switch>   
          <Route path="/" exact component={List}/>
          <Route path="/pokemon/:id/:nombre/:imagen" exact component={MostrarPokemon}/>  
      
      </Switch>
      </Router>
    </>
  );
}


export default App;
