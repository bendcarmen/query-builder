import React, { PureComponent } from 'react';
import { arrayOf, shape, func } from 'prop-types';
import { queryTermGroupType } from 'types';
import { QueryTermGroup } from './QueryTermGroup';

export class QueryTermGroupList extends PureComponent {
  static propTypes = {
    removeTerm: func.isRequired,
    queryTermGroups: arrayOf(shape(queryTermGroupType)).isRequired,
  }
  render() {
    const { queryTermGroups } = this.props;
    const { length } = queryTermGroups;
    return (
      <div>
        {this.props.queryTermGroups.map((queryTermGroup, index) => ([
          <QueryTermGroup
            index={index}
            queryTermGroup={queryTermGroup}
            key={queryTermGroup.id}
            removeTerm={this.props.removeTerm}
          />,
          index < length - 1 &&
          <div
            className="and"
          >
            <div>
              AND
            </div>
          </div>,
        ]))}
      </div>
    );
  }
}
