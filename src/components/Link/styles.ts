import { Link } from "react-router-dom";
import { styled } from "../../styles/Theme.provider";

export const LinkContainer = styled(Link, {
  color: "$primary",
  opacity: "0.5",
  border: "none",
  background: "none",
  display: "flex",
  alignItems: "center",
  transition: "all 0.2s ease",
  textDecoration: "none",

  "&:hover": {
    opacity: "1",
  },
});
