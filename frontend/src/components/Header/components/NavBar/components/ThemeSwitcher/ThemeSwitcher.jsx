import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../../../../../redux/actions/themeAction";
import { useTheme } from "@emotion/react";
import ThemeSwitcherStyled from "./ThemeSwitcherStyled";

function ThemeSwitcher() {
  const currentThemeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleToggleTheme = () => {
    const newThemeMode = currentThemeMode === "light" ? "dark" : "light";
    dispatch(setTheme(newThemeMode));
  };
  return (
    <div>
      <ThemeSwitcherStyled theme={theme} onChange={handleToggleTheme} />
    </div>
  );
}
export default ThemeSwitcher;
