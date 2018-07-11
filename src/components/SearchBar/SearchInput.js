import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import debounce from 'lodash.debounce';

export class SearchInput extends PureComponent {
  static propTypes = {
    doSearch: func.isRequired,
  }

  state = { searchTerm: '' };

  doSearchAtPause = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 200);

  clearSearchTerm = () => {
    this.setState({ searchTerm: '' });
  }

  handleOnBlur = () => {
    this.clearSearchTerm();
  }

  handleSearch = (event) => {
    const { value: searchTerm } = event.target;
    this.setState(prevState => ({ ...prevState, searchTerm }), () => {
      this.doSearchAtPause();
    });
  }

  render() {
    return (
      <input
        className="SearchInput"
        placeholder="Enter A Query Term"
        type="search"
        value={this.state.searchTerm}
        onBlur={this.handleOnBlur}
        onChange={this.handleSearch}
      />
    );
  }
}
