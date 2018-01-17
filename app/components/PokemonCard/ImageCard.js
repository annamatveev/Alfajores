import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PokemonImageCardWrapper = styled.div`
  display: flex;  
  flex-direction: column;
  margin: 10px;
`;
const PokemonImageWrapper = styled.div`

`;

const PokemonNumWrapper = styled.div`
  margin: 10px;
  color: #454749;
  font-size: 13px;
  text-align: center;
`;

const ImageCard = ({ image, number }) => (
    <PokemonImageCardWrapper>
      <PokemonImageWrapper>
        <img src={image}/>
      </PokemonImageWrapper>
      <PokemonNumWrapper>
        {number}
      </PokemonNumWrapper>
    </PokemonImageCardWrapper>
  )
;

ImageCard.propTypes = {
  img: PropTypes.string,
  number: PropTypes.string,
};

export default ImageCard;
