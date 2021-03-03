import "./App.css";
import Homepage from "./views/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detail from './views/Detail'
import Favorite from './views/Favorite'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        {/* Router */}
        <Switch>
        <Route path="/favorite">
          <Favorite/>
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
