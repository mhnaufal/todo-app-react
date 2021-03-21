import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import Error from "./components/Page404";
import Navbar from "./components/Navbar";

function App() {
  const [tasks, setTasks] = useState(null);

  /**Run every first render */
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => {
        /**Return the response in an async way */
        return response.json();
      })
      .then((data) => {
        /**After await of the async response */
        setTasks(data);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            {tasks && <Home tasks={tasks} />}
          </Route>
          <Route exact path="/task/:id">
            <Task />
          </Route>
          <Route exact path="/create">
            <AddTask />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
