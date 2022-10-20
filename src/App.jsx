import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=898&offset=0"
      );
      // console.log(response.data);
      setPokemones(response.data.results);
    };
    getPokemons();
  }, []);
  // useEffect(() => {
  //   // console.log(search)
  //   const newPokemones = pokemones.filter(pokemon => pokemon.name === search.toLowerCase())
  //   setPokemones(newPokemones)
  //   // console.log(newPokemones)
  // }, [search])
  return (
    <div>
      <Header />
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
          <div className="row">
            {pokemones.map((pokemon) => (
              <Card
                key={pokemon.name}
                namePokemon={pokemon.name}
              />
            ))}
          </div>
          {/* {disable && (
            <div className="row">
              {pokemones.map((pokemon) => (
                <Card
                  key={pokemon.name}
                  namePokemon={pokemon.name}
                  setDisable={setDisable}
                />
              ))}
            </div>
          )} */}
        </div>
      </main>
    </div>
  );
}

export default App;
