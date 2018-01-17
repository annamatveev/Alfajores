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
  border: 2px solid #${(props) => props.color};
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
  background-color: #${(props) => props.color};
  text-transform: uppercase;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  text-align: center;
  padding: 15px;
  margin: auto;
  width: 100%;
`;

function generateColor(type) {
  switch (type) {
    case 'Grass':
      return 'a5c4a2';
    case 'Fire':
      return 'ef6969';
    case 'Flying':
      return '62ace5';
    case 'Water':
      return '349ced';
    case 'Bug':
      return '8ba88a';
    case 'Electric':
      return 'd6be66';
    case 'Poison':
      return 'e599bd';
    default:
      return 'caafe0';
  }
}

const PokemonCard = ({ pokemon }) => (
  <PokemonCardWrapper color={generateColor(pokemon.type[0])}>
    <PokemonNameWrapper color={generateColor(pokemon.type[0])}>
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
