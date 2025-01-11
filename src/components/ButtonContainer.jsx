import { FaRegHandBackFist } from "react-icons/fa6";
import { IoHandRightOutline } from "react-icons/io5";
import { FaRegHandScissors } from "react-icons/fa6";

const ButtonContainer = ({ handleButtonClick }) => {
  return (
    <div className="button-container">
      <div className="rock-container">
        <button
          type="button"
          className="btn btn-light af-button"
          onClick={() => handleButtonClick("stone")}
        >
          <FaRegHandBackFist />
        </button>
        <p>Rock</p>
      </div>
      <div className="paper-container">
        <button
          type="button"
          className="btn btn-light af-button"
          onClick={() => handleButtonClick("paper")}
        >
          <IoHandRightOutline />
        </button>
        <p>Paper</p>
      </div>
      <div className="scissor-container">
        <button
          type="button"
          className="btn btn-light af-button"
          onClick={() => handleButtonClick("scissor")}
        >
          <FaRegHandScissors />
        </button>
        <p>Scissor</p>
      </div>
    </div>
  );
};

export default ButtonContainer;
