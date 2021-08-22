import api from "./api";

class PokemonService {
  static async get(id) {
    const response = await api.get(`pokemon/${id}`);

    return response.data;
  }
  static async getAll() {
    let pokemons = [];
    for(let i = 601; i <= 898; i++) {
      console.log(i);
      const {data} = await api.get(`pokemon/${i}`);
      //console.log(JSON.stringify(data.other, null, 2));
      pokemons.push({
        name: data.name,
        types: data.types,
        avatar: data.sprites.other['official-artwork'].front_default,
      })
    }
    console.log(JSON.stringify(pokemons));
    
    
  }
}



export default PokemonService;