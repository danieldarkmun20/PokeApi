import React from "react";
import useFormatNumber from "../Hooks/useFormatNumber";

const PokemonDetails = ({ pokemon }) => {
  const [FormatNumber] = useFormatNumber();
  return (
    <>
      <div
        className="modal fade"
        id={`modalId${pokemon.order}`}
        tabIndex={`-1`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby={`modalTitleId${pokemon.order}`}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5
                id={`modalTitleId${pokemon.order}`}
                className="modal-title fs-2 text-center"
              >
                <strong
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {pokemon.name}
                </strong>
              </h5>
              {/* <h5 className="modal-title">{pokemon.name}</h5> */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="d-flex justify-content-center col-md-12">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    className="pokemon-image"
                    alt={`${pokemon.name}`}
                  />
                </div>
                <div className="d-flex justify-content-center col-md-6">
                  <p>
                    Altura: <strong>{FormatNumber(pokemon?.height)} mts</strong>
                  </p>
                </div>
                <div className="d-flex justify-content-center col-md-6">
                  <p>
                    Peso: <strong>{FormatNumber(pokemon?.weight)} kg</strong>
                  </p>
                </div>
                {pokemon?.stats?.map((s) => (
                  <div className="d-flex justify-content-center col-md-6">
                    <p>
                      {s.stat.name}: <strong>{s.base_stat}</strong>
                    </p>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-evenly gap-3 px-4 py-2">
                { pokemon?.types !== undefined && pokemon?.types.map((type) => (
                  <span className=" rounded-pill badge bg-light text-dark">
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
