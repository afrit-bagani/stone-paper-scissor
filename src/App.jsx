import { useState } from "react";
import ButtonContainer from "./components/ButtonContainer";
import Heading from "./components/Heading.jsx";
import ResultStatement from "./components/ResultStatement";
import ScoreContainer from "./components/ScoreContainer";
import NewGame from "./components/NewGame.jsx";

function App() {
  const [result, setResult] = useState("Lets Play");
  const [counter, setCounter] = useState({ win: 0, loss: 0, tie: 0 });
  let [userImg, setUserImg] = useState("images/user_rock_image.png");
  let [comImg, setComImg] = useState("images/com_rock_image.png");

  const handleButtonClick = (user) => {
    if (user === "stone") {
      setUserImg("images/user_rock_image.png");
    } else if (user == "paper") {
      setUserImg("images/user_paper_image.png");
    } else if (user == "scissor") {
      setUserImg("images/user_scissor_image.png");
    }

    const randomNumber = Math.floor(Math.random() * 3);
    let com;
    if (randomNumber === 0) {
      com = "stone";
      setComImg("images/com_rock_image.png");
    } else if (randomNumber === 1) {
      com = "paper";
      setComImg("images/com_paper_image.png");
    } else if (randomNumber === 2) {
      com = "scissor";
      setComImg("images/com_scissor_image.png");
    }

    if (
      (user === "stone" && com === "scissor") ||
      (user === "paper" && com === "stone") ||
      (user === "scissor" && com === "paper")
    ) {
      setResult("User Win");
      setCounter((prevCounter) => ({
        ...prevCounter,
        win: prevCounter.win + 1,
      }));
    } else if (user === com) {
      setResult("It's a Tie");
      setCounter((prevCounter) => ({
        ...prevCounter,
        tie: prevCounter.tie + 1,
      }));
    } else {
      setResult("Computer Win");
      setCounter((prevCounter) => ({
        ...prevCounter,
        loss: prevCounter.loss + 1,
      }));
    }
  };

  const newGame = () => {
    setCounter({ win: 0, loss: 0, tie: 0 });
  };

  return (
    <div className="main-container">
      <Heading />
      <ScoreContainer
        counter={counter}
        userImg={userImg}
        comImg={comImg}
      ></ScoreContainer>
      <ResultStatement result={result}></ResultStatement>
      <ButtonContainer handleButtonClick={handleButtonClick}></ButtonContainer>
      <NewGame newGame={newGame} />
    </div>
  );
}

export default App;
