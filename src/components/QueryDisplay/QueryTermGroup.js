import React, { PureComponent } from 'react';
import PropTypes, { shape, func } from 'prop-types';
import { queryTermGroupType } from 'types';
import { QueryTerm } from './QueryTerm';

export class QueryTermGroup extends PureComponent {
  static propTypes = {
    queryTermGroup: shape(queryTermGroupType).isRequired,
    removeTerm: func.isRequired,
    index: PropTypes.number.isRequired,
  };

  handleQueryTermClick = (termIndex) => {
    const { index: groupIndex } = this.props;
    this.props.removeTerm(groupIndex, termIndex);
  }

  render() {
    const { queryTermGroup } = this.props;
    const values = Object.values(queryTermGroup.children);
    return (
      <div className="QueryTermGroup">
        {
          values.length > 1 &&
          <span
            className="paren"
          >
            (
          </span>
        }
        {values.map((queryTerm, index) => ([
          <QueryTerm
            key={queryTerm.id}
            index={index}
            queryTerm={queryTerm}
            onClick={this.handleQueryTermClick}
          />,
          (index < values.length - 1) &&
          <div className="QueryTerm or">
            OR
          </div>,
        ]))}
        {values.length > 1 && <span className="paren">)</span>}
      </div>
    );
  }
}
