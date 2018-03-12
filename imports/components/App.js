import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

// Importing components

import TaskItem from '../components/TaskItem/TaskItem.js';
import Header from '../components/Header/Header.js';
import Sidebar from '../components/Sidebar/Sidebar.js';

// Importing Collections

import { Tasks } from '../api/tasks.js';

//Importing Global Styles
import './App.css';

// App component - represents the whole app
class App extends Component {

  renderTasks() {
    return this.props.tasks.map((task) => (
      <TaskItem key={task._id} task={task} />
    ));
  }


  deleteTask() {
    Tasks.remove(this.props.task._id);
  }

  render() {
    return (
      <div>

        <Header />

        <div className="mainGrid">

        <Sidebar />

          <div className="tasksGrid">
            {this.renderTasks()}
          </div>

      </div>
    </div>
    );
  }
}

export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { completed: false, createdAt: -1 } }).fetch(),
  };
})(App);
