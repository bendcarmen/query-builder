import React, { PureComponent, Fragment } from 'react';
import { func, node } from 'prop-types';
import { ontologyType } from 'types';
import { SearchInput } from './SearchInput';
import { SearchResultList } from './SearchResultList';
import './SearchBar.scss';

export class SearchBar extends PureComponent {
  static propTypes = {
    terms: ontologyType.terms.isRequired,
    selectResult: func.isRequired,
    children: node.isRequired,
  }
  state = {
    searchTerm: '',
    showFilteredTerms: false,
  };

  setSearchTerm = (searchTerm) => {
    this.setState(prevState => ({ ...prevState, searchTerm }));
  }

  setFilteredTermsVisibility = (showFilteredTerms) => {
    this.setState(prevState => ({ ...prevState, showFilteredTerms }));
  }

  selectResultAndCloseFilteredTerms = (queryTerm) => {
    this.props.selectResult(queryTerm);
    this.setFilteredTermsVisibility(false);
  }

  handleOnBlur = () => {
    this.setSearchTerm('');
    this.setFilteredTermsVisibility(false);
  }

  handleOnFocus = () => {
    this.setFilteredTermsVisibility(true);
  }

  handleButtonFocus = (event) => {
    event.stopPropagation();
  }

  render() {
    const searchTerm = this.state.searchTerm.toLowerCase();
    const { terms } = this.props;
    const results = terms.filter(({ name }) => name.toLowerCase().includes(searchTerm));
    return (
      <div
        className="SearchBar"
        onBlur={this.handleOnBlur}
        onFocus={this.handleOnFocus}
      >
        <SearchInput
          doSearch={this.setSearchTerm}
        />
        {this.props.children}
        {this.state.showFilteredTerms &&
          <SearchResultList
            results={results}
            searchTerm={this.state.searchTerm}
            selectResult={this.selectResultAndCloseFilteredTerms}
          />
        }
      </div>
    );
  }
}
