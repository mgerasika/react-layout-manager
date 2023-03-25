import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ExampleFull } from "./components/example-full.component";
import "./styles.scss";

const App: React.FC = () => {
  return (
    <Suspense fallback="">
      <div className="App" style={{ pointerEvents: "auto" }}>
        <Router>
          <Switch>
            <Route path="/">
              <ExampleFull />
            </Route>
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
};

export default App;
