import { Link } from "react-router-dom";
import { styled } from "../../styles/Theme.provider";

export const BreadcrumbWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const BreadcrumbSeparator = styled("span", {
  display: "flex",
  opacity: "0.5",
  color: "$text",
  margin: "0 5px",
});

export const BreadcrumbItem = styled(Link, {
  display: "flex",

  textTransform: "capitalize",
  color: "$text",
  textDecoration: "none",
  opacity: "0.5",
  transition: "all 0.4s ease",

  "&:hover": {
    opacity: "1",
  },
});
