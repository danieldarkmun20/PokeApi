import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import PokemonDetails from "./components/PokemonDetails";
import SearchInput from "./components/SearchInput";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonesFilter, setPokemonesFilter] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState({});
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [generation, setGeneration] = useState({
    limit: 150,
    offset: 0,
  });
  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${generation.limit}&offset=${generation.offset}`
      );
      setPokemones(response.data.results);
      setPokemonesFilter(response.data.results);
    };
    getPokemons();
  }, []);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${generation.limit}&offset=${generation.offset}`
      );
      setPokemones(response.data.results);
      setPokemonesFilter(response.data.results);
    };
    getPokemons();
  }, [generation]);

  useEffect(() => {
    if (search.trim() === "") {
      setPokemonesFilter(pokemones);
      return;
    }
    const newPokemones = pokemones.filter((pokemon) =>
      pokemon.name.includes(search.toLowerCase())
    );
    setPokemonesFilter(newPokemones);
  }, [search]);

  return (
    <div>
      <Header setGeneration={setGeneration} />
      <main className="contenedor px-3">
        <div className="d-flex justify-content-center">
          <SearchInput search={search} setSearch={setSearch} />
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div
            className="row"
            style={{
              width: "1200px",
            }}
          >
            {pokemonesFilter.map((pokemon) => (
              <Card
                key={pokemon.name}
                namePokemon={pokemon.name}
                setPokemonSelected={setPokemonSelected}
                setCount={setCount}
              />
            ))}
          </div>
        </div>
      </main>
      <PokemonDetails pokemon={pokemonSelected}/>
    </div>
  );
}

export default App;
