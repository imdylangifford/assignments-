import React, { Component } from "react";
import "./App.css";
import NewTask from "./NewTask";
import List from "./List";

class App extends Component {
  constructor() {
    super();

    this.state = { todos: ["get a job"] };
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleAddTask(task) {
    this.setState({ todos: [...this.state.todos, task] });
  }
  render() {
    return (
      <div className="App">
        <h1>My to-do List</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.todos} />
      </div>
    );
  }
}

export default App;
