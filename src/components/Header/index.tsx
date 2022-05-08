import { HeaderWrapper } from "./styles";

import logo from "../../assets/logo.svg";
import Navbar from "./Navbar";

function Header() {
  return (
    <HeaderWrapper>
      <img src={logo} alt="logo" />

      <Navbar />
    </HeaderWrapper>
  );
}

export default Header;
