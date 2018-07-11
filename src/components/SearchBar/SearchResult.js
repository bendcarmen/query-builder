import React, { PureComponent } from 'react';
import { queryTermType } from 'types';

export class SearchResult extends PureComponent {
  static propTypes = { ...queryTermType };

  handleClick = () => {
    const { selectResult, term } = this.props;
    selectResult(term);
  }
  render() {
    const { term } = this.props;
    return (
      <div
        className="searchResult"
        role="button"
        onMouseDown={this.handleClick}
      >
        {term.name}
      </div>
    );
  }
}
