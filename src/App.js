import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UploadResults from "./components/UploadResults";
import ViewResults from "./components/ViewResults";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/results/upload-results" component={UploadResults} />
        <Route exact path="/results/view-results" component={ViewResults} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
