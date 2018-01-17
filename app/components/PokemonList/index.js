import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PokemonCard from 'components/PokemonCard';

const PokemonListWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  flex-wrap: wrap;
  margin: auto;
  z-index: 99;
`;

const PokemonList = ({ pokemons }) => (
  <PokemonListWrapper>
    {pokemons.map((item) => (
        <PokemonCard key={item.id} pokemon={item}/>
      )
    )}
  </PokemonListWrapper>
)

PokemonList.propTypes = {
  name: PropTypes.array
};

export default PokemonList;
