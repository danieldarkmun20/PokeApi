const Header = ({ setGeneration }) => {
  const handleClick = (generation) => {
    switch (generation) {
      case 1:
        setGeneration({
          limit: 150,
          offset: 0,
        });
        break;
      case 2:
        setGeneration({
          limit: 100,
          offset: 151,
        });
        break;
      case 3:
        setGeneration({
          limit: 135,
          offset: 251,
        });
        break;
      case 4:
        setGeneration({
          limit: 107,
          offset: 386,
        });
        break;
      case 5:
        setGeneration({
          limit: 156,
          offset: 493,
        });
        break;
      case 6:
        setGeneration({
          limit: 72,
          offset: 649,
        });
        break;
      case 7:
        setGeneration({
          limit: 81,
          offset: 721,
        });
        break;
      case 8:
        setGeneration({
          limit: 92,
          offset: 809,
        });
        break;
    }
  };
  return (
    <header className="d-flex justify-content-center">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">
            Poke <strong> Api </strong>
          </h1>
        </div>
        <div className="col-md-12 my-3">
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => handleClick(1)}
            >
              I
            </button>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => handleClick(2)}
            >
              II
            </button>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => handleClick(3)}
            >
              III
            </button>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => handleClick(4)}
            >
              IV
            </button>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => handleClick(5)}
            >
              V
            </button>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => handleClick(6)}
            >
              VI
            </button>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => handleClick(7)}
            >
              VII
            </button>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => handleClick(8)}
            >
              VIII
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
