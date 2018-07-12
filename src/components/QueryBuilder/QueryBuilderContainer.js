import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { queryBuilderType } from 'types';
import {
  fetchOntology,
  addQueryTerm,
  addQueryTermGroup,
  removeQueryTerm,
  removeQueryTermGroup,
} from 'actions';
import { QueryBuilder } from './QueryBuilder';
import { Spinner } from 'components/shared';

import './QueryBuilder.scss';

class QueryBuilderContainer extends PureComponent {
  static mapStateToProps = ({ queryBuilder, ontology }) => ({ queryBuilder: { ...queryBuilder, ontology } });
  static propTypes = {
    queryBuilder: queryBuilderType,
    dispatch: func.isRequired,
  };

  componentWillMount() {
    const { dispatch, queryBuilder } = this.props;
    if (!queryBuilder.ontology || !queryBuilder.ontology.length) {
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
    const { queryBuilder } = this.props;
    const { ontology } = queryBuilder;
    return (
      <div className="QueryBuilderContainer">
        {ontology.isBusy || ontology.terms.length === 0
          ? <Spinner >Loading Ontology...</Spinner>
          : <QueryBuilder
              queryBuilder={queryBuilder}
              addTerm={this.addQueryTerm}
              removeTerm={this.removeQueryTerm}
              addGroup={this.addQueryTermGroup}
              removeGroup={this.removeQueryTermGroup}
            />
        }
      </div>
    );
  }
}

export default connect(QueryBuilderContainer.mapStateToProps)(QueryBuilderContainer);
