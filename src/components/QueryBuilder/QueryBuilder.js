import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { queryBuilderType } from 'types';

import { SearchBar } from 'components/SearchBar';
import { QueryDisplay } from 'components/QueryDisplay';
import { QueryButton } from './QueryButton';
import { Background } from 'components/Background';
import './QueryBuilder.scss';

export class QueryBuilder extends PureComponent {
  static propTypes = {
    queryBuilder: { ...queryBuilderType },
    addTerm: func.isRequired,
    removeTerm: func.isRequired,
    addGroup: func.isRequired,
  }
  render() {
    const { queryBuilder } = this.props;
    return (
      <div className="QueryBuilderContainer">
        <div>
          <Background />
          <SearchBar
            terms={queryBuilder.ontology.terms}
            selectResult={this.props.addTerm}
          >
            {[
              <QueryButton
                isValid={queryBuilder.canSubmit}
                click={this.props.addGroup}
              >
                AND
              </QueryButton>,
            ]}
          </SearchBar>
        </div>
        <QueryDisplay
          queryTermGroups={queryBuilder.queryTermGroups}
          removeTerm={this.props.removeTerm}
        />
      </div>
    );
  }
}
