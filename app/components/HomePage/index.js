import React from "react";

import { Helmet } from 'react-helmet';
import Info from "../../components/Info";
import PropTypes from 'prop-types';
import Header from 'components/Header';
import styled from 'styled-components';

const HomePageWrapper = styled.div`
   min-height: 100vh;
`;


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
      <HomePageWrapper>
        <Helmet>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <Header />
        <div>
          <Info {...GOTDataListProps}/>
        </div>
      </HomePageWrapper>
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


export default HomePage;
