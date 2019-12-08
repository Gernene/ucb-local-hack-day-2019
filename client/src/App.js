import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { AppLayout } from "./components/AppLayout";
import { ScheduleView } from "./views/ScheduleView";
import { RegisterView } from "./views/RegisterView";

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path="/" component={HomeView}/>
          <Route exact path="/register" component={RegisterView}/>
          <Route exact path="/schedule" component={ScheduleView}/>
        </Switch>
      </AppLayout>
    </Router>
  );
}