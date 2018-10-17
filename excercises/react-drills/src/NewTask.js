import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleAdd() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.inpute}
          onChange={this.handleChange}
          type="text"
        />
        <button onClick={this.handleAdd} />
      </div>
    );
  }
}
export default NewTask;
