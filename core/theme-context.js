import React, { useContext, createContext, useEffect } from "react";

export const themes = {
  dark: "dark-theme",
  light: "light-theme",
};

//Context
export const ThemeContext = createContext(null);

//Provider
export const ThemeContextProvider = ({ children }) => {
  const [variableState, setVariableState] = React.useState();

  useEffect(() => {
    setVariableState(getStorageTheme());
    if (variableState === themes.dark) {
      document.body.classList.add(themes.dark);
      document.body.classList.remove(themes.light);
    } else {
      document.body.classList.add(themes.light);
      document.body.classList.remove(themes.dark);
    }
  }, [variableState]);

  //
  const values = React.useMemo(
    () => ({
      variableState, // States que seran visibles en el contexto.
      setVariableState, // Funciones que son exportadas para manejo externo.
    }),
    [variableState]
  ); // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const setStorageTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

export const getStorageTheme = () => {
  return localStorage.getItem("theme");
};

//
export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useThemeContext;
