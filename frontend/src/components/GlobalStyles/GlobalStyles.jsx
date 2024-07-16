import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";

const GlobalStyles = () => {
  const theme = useTheme();

  useEffect(() => {
    const rootStyle = document.documentElement.style;

    // Asignar valores de la paleta de MUI a variables CSS globales
    rootStyle.setProperty(
      "--background-color",
      theme.palette.background.default
    );
    rootStyle.setProperty("--text-color", theme.palette.text.primary);
    rootStyle.setProperty("--primary-color", theme.palette.primary.main);
    rootStyle.setProperty("--secondary-color", theme.palette.secondary.main);
    rootStyle.setProperty("--error-color", theme.palette.error.main);
    rootStyle.setProperty("--warning-color", theme.palette.warning.main);
    rootStyle.setProperty("--info-color", theme.palette.info.main);
    rootStyle.setProperty("--success-color", theme.palette.success.main);
  }, [theme]);

  return null;
};

export default GlobalStyles;
