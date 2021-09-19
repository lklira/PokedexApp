import api from './api';

class PokemonService {
  static async get(id) {
    const response = await api.get(`pokemon/${id}`);

    return response.data;
  }
}

export default PokemonService;
