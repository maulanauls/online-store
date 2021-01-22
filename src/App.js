import React, { useContext, useEffect } from "react";
import { ThemeProvider } from "baseui";
import Index from "./router";
import { Block } from "baseui/block";
import { createTheme, createDarkTheme } from "baseui";

import { Context } from "./state/store";

const THEME = {
  light: "light",
  dark: "dark",
};
export default function App() {
  const [state] = useContext(Context);

  const [theme, setTheme] = React.useState(THEME.light);
  const primitives = {
    primaryFontFamily: "Euclid Circular A",
  };

  useEffect(() => {
    if(state.theme.theme === "light") {
        document.getElementById("body").className = "lighttheme";
    } else {
        document.getElementById("body").className = "darktheme";
    }
    setTheme(state.theme.theme)
  }, [state]);

  return (
    <ThemeProvider
      theme={
        theme === "light"
          ? createTheme(primitives)
          : createDarkTheme(primitives)
      }
    >
      <Block backgroundColor={theme === "light" ? ["#fff"] : ["#141414"]}>
        <Index />
      </Block>
    </ThemeProvider>
  );
}
