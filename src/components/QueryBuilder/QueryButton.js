import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class QueryButton extends PureComponent {

  static propTypes = {
    children: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
  }

  handleClick = () => {
    if (this.props.isValid) {
      this.props.click();
    }
  }

  handleFocus = (event) => {
    event.stopPropagation();
  }

  render() {
    const className = this.props.isValid ? 'QueryButton' : 'QueryButton disabled';
    return (
      <button
        className={className}
        onClick={this.handleClick}
        onFocus={this.handleFocus}
      >
        <div>
          {this.props.children}
          <span className="fas fa-cogs" />
        </div>
      </button>
    );
  }
}
