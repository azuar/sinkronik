import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import MainPages from "../pages";
import PublicLayout from "../component/public-layout";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<MainPages />} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
