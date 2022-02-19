import Cadastro from "../Pages/Cadastro";
import Home from "../Pages/Home";

const { Switch, Route } = require("react-router-dom");

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Cadastro />
      </Route>
      <Route path={"/home/:name"}>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
