/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import { makeSelectGOTData, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { loadGOTData } from '../App/actions';
import saga from './saga';
import Info from "../../components/Info";

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { loading, error, data } = this.props;
    const GOTDataListProps = {
      loading,
      error,
      data,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          <Info {...GOTDataListProps}/>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  data: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(loadGOTData()),
  };
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectGOTData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withSaga,
  withConnect,
)(HomePage);
