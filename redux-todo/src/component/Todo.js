import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: " "
    };
  }

  addtodo = () => {
    if (this.props.addTodo) {
      this.props.addTodo(this.state.todo);
    }
  };

  deleteTodo = id => {
    if (this.props.deleteTodo) {
      this.props.deleteTodo(id);
      this.setState({ todo: " " });
    }
  };

  render() {
    return (
      <div>
        <h1>Todo Application</h1>

        <input
          type="text"
          value={this.state.todo}
          placeholder="Add your text here"
          onChange={e => {
            this.setState({ todo: e.target.value });
          }}
        />
        <br />
        <br />

        <button
          type="submit"
          onClick={() => {
            this.addtodo();
            this.setState({ todo: " " });
          }}
        >
          Add Todo
        </button>

        {this.props.result.map(valu => {
          return (
            <div>
              <div>
                 {valu.text}
              </div>

              <button
                type="submit"
                onClick={() => {
                  this.deleteTodo(valu.id, valu.text);
                }}
              >
                Delete Todo
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
