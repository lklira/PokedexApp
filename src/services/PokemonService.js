import api from './api';

class PokemonService {
  static async get(name) {
    const response = await api.get(`pokemons/get/${name}`);

    return response.data;
  }

  static async list() {
    const response = await api.get('pokemons/list');

    return response.data;
  }
}

export default PokemonService;
