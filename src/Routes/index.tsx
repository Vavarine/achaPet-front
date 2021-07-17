import { BrowserRouter, Route } from "react-router-dom";
import { LoginScreen, RegisterScreen } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginScreen} />
      <Route path="/login" component={RegisterScreen} />
    </BrowserRouter>
  );
};
