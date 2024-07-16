import "./styles/NavBar.scss";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import ListRoutes from "./components/ListRoutes/ListRoutes";
import Logo from "../../../Logo/Logo";
function NavBar() {
  return (
    <nav>
      <Logo />
      <ListRoutes />
      <ThemeSwitcher />
    </nav>
  );
}

export default NavBar;
