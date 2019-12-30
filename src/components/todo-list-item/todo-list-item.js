import React, { Component } from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {

  

  constructor(props) {
    super(props);
    this.onLabelClick = this.onLabelClick.bind(this);
    this.onMarkImportant = this.onMarkImportant.bind(this);
    this.onDeleted = this.onDeleted.bind(this);
    
    this.state = {
      done: false,
      important: false
    }
  }

  onLabelClick() {
    this.setState((state) => ({done: !state.done }));
  }

  onMarkImportant() {
    this.setState((state) => ({important: !state.important }));
  }

  onDeleted() {
    debugger;
    this.setState(() => ({delete: true }));
  }

  render() {

    const { label } = this.props;
    const { done, important } = this.state;

    let classNames ='todo-list-item';

    if ( done )
      classNames += ' done';

    if ( important )
      classNames += ' important';

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };
  
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          style={style}
          done={this.state.done}
          onClick={ this.onLabelClick }>
          {label}
        </span>
  
        <button type="button"
                onClick={this.onMarkImportant}
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                onClick={this.props.onDeleted}
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}