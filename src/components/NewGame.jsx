const NewGame = ({ newGame }) => {
  return (
    <button className="btn btn-outline-danger" onClick={newGame}>
      <p className="fs-4">New Game</p>
    </button>
  );
};

export default NewGame;
