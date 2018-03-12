import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css';
import { Tasks } from '../../api/tasks.js';

export default class Sidebar extends Component {

  handleSubmit(event) {

    event.preventDefault();

    const text = ReactDOM.findDOMNode(this.refs.addTaskInput).value.trim();
    const details = ReactDOM.findDOMNode(this.refs.addTaskInputDetails).value.trim();

    Tasks.insert({
      text,
      details,
      completed: false,
      createdAt: new Date(),
    });

    ReactDOM.findDOMNode(this.refs.addTaskInput).value = "";
    ReactDOM.findDOMNode(this.refs.addTaskInputDetails).value = "";
  }

  render() {
    return (
      <aside>
        <h2>Add a Task</h2>
        <p>This is a text describing what this feature does, how to help the user etc.</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input className="addTaskInput" ref="addTaskInput" type="text" placeholder="Task title"/>

        <textarea placeholder="Task details..." rows="5" className="addTaskInput" ref="addTaskInputDetails"></textarea>
        <button className="addTaskBtn">Add task</button>
        </form>
      </aside>
    );
  }
}
