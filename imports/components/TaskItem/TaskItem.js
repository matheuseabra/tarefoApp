import React, {Component} from 'react';
import { Tasks } from '../../api/tasks.js';
import './TaskItem.css';

export default class TaskItem extends Component {

  toogleChecked() {
    Tasks.update(this.props.task._id, {
      $set: { completed: !this.props.task.completed },
    });
  }

  deleteTask() {
    Tasks.remove(this.props.task._id);
  }

  render(){

    const taskClassNameChange = this.props.task.completed ? 'taskIsCompleted TaskCard' : 'TaskCard';
    const taskIsCompleted = this.props.task.completed ? 'Completed' : '';
    
    return(
      <li className={taskClassNameChange}>
          <button className="TaskDeleteBtn" onClick={this.deleteTask.bind(this)}>x</button>
          <input type="checkbox" className="TaskCheckbox" readOnly checked={this.props.task.completed} onClick={this.toogleChecked.bind(this) }  />
          <h2 className="TaskTitle">{this.props.task.text}</h2>
          <p>{this.props.task.details}</p>
          <p>{this.props.task.createdAt.toLocaleDateString()}</p>
          <div className="TaskActions">

            <span className="TaskStatus">{taskIsCompleted.toString()}</span>
          </div>
      </li>
    );
  }
}
