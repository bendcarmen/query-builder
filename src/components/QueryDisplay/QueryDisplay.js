import React, { PureComponent } from 'react';
import { arrayOf, shape, func } from 'prop-types';
import { queryTermGroupType } from 'types';
import { QueryTermGroupList } from './QueryTermGroupList';
import './QueryDisplay.scss';

export class QueryDisplay extends PureComponent {
  static propTypes = {
    queryTermGroups: arrayOf(shape(queryTermGroupType)).isRequired,
    removeTerm: func.isRequired,
  };
  state = {};
  render() {
    return (
      <div className="Query">
        <QueryTermGroupList
          queryTermGroups={this.props.queryTermGroups}
          removeTerm={this.props.removeTerm}
        />
      </div>
    );
  }
}
