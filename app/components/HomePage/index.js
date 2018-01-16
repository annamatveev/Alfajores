import React from "react";

import { Helmet } from 'react-helmet';
import Info from "../../components/Info";
import PropTypes from 'prop-types';

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


export default HomePage;
