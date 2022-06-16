// ** Material UI Imports
import { styled } from "@mui/system";

// ** Emoji Imports
import StarStruck from "../media/images/star-struck.png";
import HeartEyes from "../media/images/heart-eyes.png";
const BoardPanel = ({ symbol, onClick }) => {
  const GlassPane = styled("div")({
    width: "5rem",
    height: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.07)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5.8px)",
    fontSize: symbol === "CPU" ? "3rem" : "4rem",
    animationName: symbol !== "_" && "play-pop",
    animationDuration: symbol !== "_" && ".1s",
  });

  return (
    <GlassPane onClick={onClick}>
      {symbol === "CPU" && <img src={StarStruck} width={50} alt="CPU" />}
      {symbol === "Player" && <img src={HeartEyes} width={50} alt="Player" />}
    </GlassPane>
  );
};

export default BoardPanel;
