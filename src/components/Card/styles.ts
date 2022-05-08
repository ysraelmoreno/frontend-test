import { Link } from "react-router-dom";
import { styled } from "../../styles/Theme.provider";

export const CardWrapper = styled(Link, {
  display: "flex",
  padding: "30px 20px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  justifyContent: "space-between",
  textDecoration: "none",
  color: "$text",
  transition: "all 0.4s ease",

  "& + &": {
    marginTop: "20px",
  },

  span: {
    opacity: 0.5,
    textTransform: "capitalize",
  },

  "&:hover": {
    cursor: "pointer",
    boxShadow: "0 0 5px 1px rgba(0, 0, 0, 0.1)",
  },
});
