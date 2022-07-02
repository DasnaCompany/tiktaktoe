// ** Material UI Styled Import
import { styled } from "@mui/system";

// ** Material UI Imports
import { Box, Input, Button, Table } from "@mui/material";
import { Close } from "@mui/icons-material";

// React Router Imports
import { Link } from "react-router-dom";

/**
 * @desc Form Box Styled Component
 * @example
 * <FormBox>...</FormBox>
 */
export const FormBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  background: "rgba(255, 255, 255, 0.12)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.8px)",
  gap: "1rem",
});

/**
 * @desc Form Input Styled Component
 * @example
 * <FormInput disableUnderline value={} onChange={() => {}}/>
 */
export const FormInput = styled(Input)({
  height: "3rem",
  borderRadius: 3,
  background: "#ffffff",
});

/**
 * @desc Form Button Styled Component
 * @example
 * <FormButton variant={"contained"}>...</FormButton>
 */
export const FormButton = styled(Button)({
  fontFamily: "Lobster",
  fontSize: "1.5rem",
  textTransform: "none",
  filter: "contrast(300%)",
});

/**
 * @desc Removing Style from React Router Links
 * @example
 * <UnStyledLink to={""}>...</UnStyledLink>
 */
export const UnStyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});

/**
 * @desc History Table Styled Component
 * @example
 * <HistoryTable>...</HistoryTable>
 */
export const HistoryTable = styled(Table)({
  addingBottom: "2rem",
  background: "rgba(255, 255, 255, 0.07)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.8px)",
});

/**
 * @desc Custom Close Icon to go to the Top Corner
 * @example
 * <CustomClose/>
 */
export const CustomClose = styled(Close)({
  color: "#ffffff",
  fontSize: "2rem",
  position: "absolute",
  top: "-2rem",
  right: "1rem",
});
