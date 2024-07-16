import { useTheme } from "@emotion/react";
import NavBar from "./components/NavBar/NavBar";
import "./styles/Header.scss";

function Header() {
  const theme = useTheme();

  return (
    <header className="headerUbication">
      <NavBar />
    </header>
  );
}

export default Header;
