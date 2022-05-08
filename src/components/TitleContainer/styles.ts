import { styled } from "../../styles/Theme.provider";

export const TitleWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  paddingBottom: "15px",
  margin: "20px 0",
  borderBottom: "1px solid $colors$textAlternative",

  h1: {
    fontSize: "30px",
  },

  h5: {
    fontWeight: "400",
    color: "$textAlternative",
  },
});
