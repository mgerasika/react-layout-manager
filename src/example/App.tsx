import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ExampleFull } from "./example-full.component";
import "./index.css";

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
