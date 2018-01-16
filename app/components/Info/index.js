import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import List from 'components/List';
import ListItem from 'components/ListItem';
import GeneralInfo from 'components/GeneralInfo';


function Info({ loading, error, data }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }
  
  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }
  
  if (data !== false) {
    return <GeneralInfo name={data.name}/>;
  }
  
  return null;
}

GeneralInfo.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  data: PropTypes.any,
};

export default Info;
