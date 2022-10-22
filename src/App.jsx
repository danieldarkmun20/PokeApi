import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonesFilter, setPokemonesFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [generation, setGeneration] = useState({
    limit: 898,
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
          <div className="col-md-4">
            <input
              className="form-control fs-4"
              type="text"
              name="search"
              id="search"
              placeholder="Ejemplo: Pikachu"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
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
                count={count}
                setCount={setCount}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
