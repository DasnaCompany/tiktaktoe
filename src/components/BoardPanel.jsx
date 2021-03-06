// ** Material UI Imports
import { styled } from "@mui/system";

// ** Emoji Imports
import StarStruck from "../media/images/star-struck.png";
import HeartEyes from "../media/images/heart-eyes.png";

/**
 * @desc TicTacToe board panel to show symbol
 * @example
 * <BoardPanel symbol={"X"} player={"X"} opponent={"O"} onClick={() => handlePlayerTurn()} />
 * @param {object} props - React Properties
 * @param {string} props.symbol - symbol to show on the board
 * @param {string} props.player - the player of the game
 * @param {string} props.opponent - the player's opponent
 * @param {function} props.onClick - onclick function to pass to the panel
 * @return {ReactElement}
 */
const BoardPanel = ({ symbol, onClick, player, opponent }) => {
  // ** Glass Pane Styled Material UI Component
  const GlassPane = styled("div")({
    width: "5rem",
    height: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.12)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5.8px)",
    fontSize: symbol === "CPU" ? "3rem" : "4rem",
    animationName: symbol !== "_" && "play-pop",
    animationDuration: symbol !== "_" && ".1s",
  });

  // ** JSX render for Board Panel
  return (
    <GlassPane onClick={onClick}>
      {symbol === player && <img src={StarStruck} width={50} alt="CPU" />}
      {symbol === opponent && <img src={HeartEyes} width={50} alt="Player" />}
    </GlassPane>
  );
};

export default BoardPanel;
