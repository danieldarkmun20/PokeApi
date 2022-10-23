import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = ({ namePokemon, setPokemonSelected, setCount }) => {
  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState("");
  const [colorBg, setColorBg] = useState("");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    console.log("asda");
    const getPokemon = async () => {
      setDisable(false);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
      );

      setPokemon(response.data);

      setDisable(true);
    };
    getPokemon();
  }, []);

  useEffect(() => {
    if (pokemon !== undefined) {
      setNumber(`#${pokemon?.order?.toString().padStart(3, "000")}`);
      setColorBg(
        pokemon?.types?.map((type) => "type-" + type.type.name).join(" ")
      );
      setCount(pokemon?.order);
    }
  }, [pokemon]);

  const handleClick = (pokemon) => {
    setPokemonSelected(pokemon);
  };

  return (
    <div className="col-md-3 my-3 d-flex flex-column gap-3">
      {Object.keys(pokemon).length ? (
        <div className="card card-border-radiuos">
          <div
            className={`shadow card-body card-border-radiuos p-4 ${colorBg}`}
          >
            <h5 className="fs-2 text-white text-center mb-5">
              <strong
                style={{
                  textTransform: "capitalize",
                }}
              >
                {pokemon.name}
              </strong>
            </h5>
            <span className="pokemon-id">{number}</span>

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column gap-3 px-4 py-2">
                {pokemon.types.map((type) => (
                  <span className=" rounded-pill badge bg-light text-dark">
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="bg-pokeball"></div>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                className="pokemon-image"
                alt={`${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      ) : (
        <svg viewBox="25 25 50 50">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>
      )}
      <button
        type="button"
        className="btn btn-secondary btn-lg"
        data-bs-toggle="modal"
        data-bs-target={`#modalId${pokemon.order}`}
        onClick={() => handleClick(pokemon)}
      >
        Detalle
      </button>
    </div>
  );
};

export default Card;
