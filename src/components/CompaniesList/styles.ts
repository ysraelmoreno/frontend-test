import { styled } from "../../styles/Theme.provider";

export const ListWrapper = styled("section", {
  display: "flex",
  flexDirection: "column",
  marginTop: "30px",
  padding: "20px",
  color: "$text",
});
export const CompanyTitle = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 15px",
  marginBottom: "10px",

  span: {
    fontSize: "11px",
    opacity: 0.5,
  },
});

export const ListOfCompanies = styled("div", {
  display: "flex",
  flexDirection: "column",
});
