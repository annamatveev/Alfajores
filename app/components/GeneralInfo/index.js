import React from 'react';
import PropTypes from 'prop-types';

const GeneralInfo = ({ name }) => (
    <div>
      {name}
    </div>
);

GeneralInfo.propTypes = {
  name: PropTypes.string.isRequired
};

export default GeneralInfo;
