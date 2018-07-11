import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { ontologyType } from 'types';
import { SearchResult } from './SearchResult';

export class SearchResultList extends PureComponent {
  static propTypes = {
    results: ontologyType.terms.isRequired,
    selectResult: func.isRequired,
  };

  state = { };

  render() {
    return (
      <div>
        <div className="searchResultList">
          {this.props.results.map(term => (
            <SearchResult
              term={term}
              selectResult={this.props.selectResult}
              key={term.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
