/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import { makeSelectGOTData, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { loadGOTData } from '../App/actions';
import saga from './saga';
import HomePage from 'components/HomePage';


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
