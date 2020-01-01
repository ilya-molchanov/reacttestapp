import React, { Component }  from 'react';



export default class ItemStatusFilter extends Component {

  constructor(){
    super();
  }

  render() {

    const { filter, onFilterChange } = this.props;

    const filterButtons  = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Done' }
    ];

    const buttons = filterButtons.map(({name, label}) => {
      const isActive = filter === name;
      const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

      return (
        <button type="button"
                onClick={() => onFilterChange(name)}
                className={classNames}
                key={name}>
          {label} 
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}