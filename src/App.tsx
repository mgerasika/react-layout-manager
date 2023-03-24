import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ModeratorPageContainer from "./components/moderation-page.container";
// WARNING!!! Must be above Admin (and in fact any other component) otherwise it overrides styles of components
// WARNING!!! Broke the Landing page because the same components were loaded in Home.tsx and styles.scss overrided the Landing page
// WARNING!!! https://stackoverflow.com/a/63308877
import "./styles.scss";

const App: React.FC = () => {
  return (
    <Suspense fallback="">
      <div className="App" style={{ pointerEvents: "auto" }}>
        <Router>
          <Switch>
            <Route path="/">
              <ModeratorPageContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
};

export default App;
