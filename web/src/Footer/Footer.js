import React, { Component } from 'react';
import './Footer.css';
import Utils from '../Utils/Utils';
import classNames from 'classnames';

class Footer extends Component {
  render() {
    var activeTodoWord = Utils.pluralize(this.props.count, 'item');
    var clearButton = null;

    if (this.props.completedCount > 0) {
      clearButton = (
        <button
          className="clear-completed"
          onClick={this.props.onClearCompleted}>
          Clear completed
        </button>
      );
    }

    var nowShowing = this.props.nowShowing;
    return (
      <footer className="footer">
					<span className="todo-count">
						<strong>{this.props.count}</strong> {activeTodoWord} left
					</span>
					<ul className="filters">
						<li>
							<a onClick={() => {this.props.updateShowing("ALL_TODOS")}}
								href="#/"
								className={classNames({selected: nowShowing === "ALL_TODOS"})}>
									All
							</a>
						</li>
						{' '}
						<li>
							<a onClick={() => {this.props.updateShowing("ACTIVE_TODOS")}}
								href="#/active"
								className={classNames({selected: nowShowing === "ACTIVE_TODOS"})}>
									Active
							</a>
						</li>
						{' '}
						<li>
							<a onClick={() => {this.props.updateShowing("COMPLETED_TODOS")}}
								href="#/completed"
								className={classNames({selected: nowShowing === "COMPLETED_TODOS"})}>
									Completed
							</a>
						</li>
					</ul>
					{clearButton}
				</footer>
    );
  }
}

export default Footer;
