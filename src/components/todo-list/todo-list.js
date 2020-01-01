import React, { Component } from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

export default class TodoList extends Component {

  constructor(props) {
    super(props);
    
    
    this.state = {
      delete: false
    }
  }

  render() {

    const { todos, onDeleted, onToggleImportant, onToggleDone } = this.props;

    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;
  
      return (
        <li key={id} className="list-group-item">
          <TodoListItem
            {...itemProps }
            onDeleted={ () => onDeleted(id)
            }
            onToggleImportant={ () => onToggleImportant(id)
            }
            onToggleDone={ () => onToggleDone(id)
            }
          />
        </li>
      );
    });
  
    return (
      <ul className="list-group todo-list">
        { elements }
      </ul>
    );
  }
}
