const ScoreContainer = ({ counter, userImg, comImg }) => {
  return (
    <div className="action-container">
      <div className="user-container">
        <img src={userImg} className="af-img" />
        <p>User</p>
      </div>
      <div className="score-board">
        <span className="user-score">{counter.win}</span> —
        <span className="computer-score">{counter.loss}</span>
      </div>
      <div className="com-container">
        <div className="com-container">
          <img src={comImg} className="af-img" />
          <p>Computer</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreContainer;
