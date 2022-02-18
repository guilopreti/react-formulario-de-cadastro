const { Switch, Route } = require("react-router-dom");

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        Cadastro
      </Route>
      <Route path={"/home"}>Home</Route>
    </Switch>
  );
};

export default Routes;
