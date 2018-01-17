import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const PokemonPropertyWrapper = styled.div`
  margin: 10px;
  text-align: center;
`;

const PokemonPropertyNameWrapper = styled.div`
  text-transform: uppercase;
  color: #6e7175;
  font-size: 10px;
`

;const PokemonPropertyValueWrapper = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  color: #6e7175;
  font-size: 15px;
`;

const CardProperty = ({ name, value }) => (
  <PokemonPropertyWrapper>
    <PokemonPropertyValueWrapper>
      {value}
    </PokemonPropertyValueWrapper>
    < PokemonPropertyNameWrapper>
      < FormattedMessage
        {...name}
      />
    </PokemonPropertyNameWrapper>
  </PokemonPropertyWrapper>
);

CardProperty.propTypes = {
  name: PropTypes.object,
  value: PropTypes.string,
};

export default CardProperty;
