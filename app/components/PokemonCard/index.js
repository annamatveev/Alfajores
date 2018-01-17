import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import messages from './messages';
import CardProperty from './CardProperty';
import ImageCard from './ImageCard';

const PokemonCardWrapper = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  width: 450px;
  border-radius: 10px;
  border: 2px solid #e56464;
  overflow: hidden;  
    
  transition: transform .5s;
  &:hover,
  &:focus {
    transform: scale3d(1.05, 1.05, 1);
    transition-duration: 0.3s;
  }
`;

const PokemonInfoWrapper = styled.div`
  display: flex;       
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  width: 100%;
`;

const PokemonNameWrapper = styled.div`
  background-color: #e56464;
  text-transform: uppercase;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  text-align: center;
  padding: 15px;
  margin: auto;
  width: 100%;
`;

const PokemonCard = ({ pokemon }) => (
  <PokemonCardWrapper>
    <PokemonNameWrapper>
      {pokemon.name}
    </PokemonNameWrapper>
    <PokemonInfoWrapper>
      <ImageCard image={pokemon.img} number={pokemon.num}/>
      <CardProperty name={messages.type} value={pokemon.type} />
      <CardProperty name={messages.weight} value={pokemon.weight} />
      <CardProperty name={messages.height} value={pokemon.height} />
    </PokemonInfoWrapper>
  </PokemonCardWrapper>
);

PokemonCard.propTypes = {
  name: PropTypes.array,
};

export default PokemonCard;
