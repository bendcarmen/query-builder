import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { queryBuilderType } from 'types';
import {
  fetchOntology,
  addQueryTerm,
  addQueryTermGroup,
  removeQueryTerm,
  removeQueryTermGroup,
} from 'actions';
import { SearchBar } from 'components/SearchBar';
import { QueryDisplay } from 'components/QueryDisplay';
import { QueryButton } from './QueryButton';
import { Spinner } from 'components/shared';
import { Background } from 'components/Background';
import './QueryBuilder.scss';

class QueryBuilder extends PureComponent {
  static mapStateToProps = ({ queryBuilder, ontology }) => ({ ...queryBuilder, ontology });
  static propTypes = queryBuilderType;

  componentWillMount() {
    const { dispatch, ontology } = this.props;
    if (!ontology || !ontology.length) {
      dispatch(fetchOntology());
    }
  }

  addQueryTerm = queryTerm =>
    this.props.dispatch(addQueryTerm(queryTerm));

  removeQueryTerm = (groupIndex, termIndex) =>
    this.props.dispatch(removeQueryTerm(groupIndex, termIndex));

  removeQueryTermGroup = groupIndex =>
    this.props.dispatch(removeQueryTermGroup(groupIndex));

  addQueryTermGroup = () => this.props.dispatch(addQueryTermGroup());

  render() {
    const { ontology, canSubmit } = this.props;
    return (
      <div className="QueryBuilderContainer">
        {ontology.isBusy && <Spinner >Loading Ontology...</Spinner>}
        {ontology.hasError && <span>Ontology Error </span>}
        {!ontology.isBusy &&
          <div>
            <Background />
            <SearchBar
              terms={ontology.terms}
              selectResult={this.addQueryTerm}
            >
              {[
                <QueryButton
                  isValid={canSubmit}
                  click={this.addQueryTermGroup}
                >
                  AND
                </QueryButton>,
              ]}
            </SearchBar>
          </div>
        }
        <QueryDisplay
          queryTermGroups={this.props.queryTermGroups}
          removeTerm={this.removeQueryTerm}
        />
      </div>
    );
  }
}

export default connect(QueryBuilder.mapStateToProps)(QueryBuilder);
