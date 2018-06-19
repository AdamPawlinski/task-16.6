import React from 'react';
import style from '../styles/ToDoList.css';

class ToDoList extends React.Component {
  render() {
    return (
    <ul className={style.todolist} onClick={this.props.remove}>
      {this.props.todoTasks.map(data =>
          <li key={data.id}>
            <h3>{data.id}</h3>
            <span>{data.text}</span>
          </li>)}
    </ul>
    );
  }
}

export default ToDoList;
