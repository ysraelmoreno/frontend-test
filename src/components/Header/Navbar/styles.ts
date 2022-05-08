import { styled } from "../../../styles/Theme.provider";

export const NavbarWrapper = styled("nav", {
  display: "flex",
});

export const NavbarItem = styled("a", {
  color: "$primary",
  opacity: "0.5",
  transition: "all 0.2s ease-in-out",

  "& + &": {
    marginLeft: "20px",
  },

  "&:hover": {
    opacity: "1",
  },
});
