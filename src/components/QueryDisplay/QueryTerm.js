import React, { PureComponent } from 'react';
import PropTypes, { shape } from 'prop-types';
import { queryTermType } from 'types';

export class QueryTerm extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    queryTerm: shape(queryTermType).isRequired,
    onClick: PropTypes.func.isRequired,
  }
  state = {};

  handleClick = () => {
    this.props.onClick(this.props.index);
  }

  render() {
    const { queryTerm } = this.props;
    return (
      <div
        role="button"
        onClick={this.handleClick}
        className="QueryTerm"
      >
        <span className="fas fa-times" />
        <span className="termName">{queryTerm.name}</span>
      </div>
    );
  }
}
