import {POKEMON_TYPE_COLORS} from '../Constants/constants';

const getColorByPokemonType = (type: string) =>
  POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;
