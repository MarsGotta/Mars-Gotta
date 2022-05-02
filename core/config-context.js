import React, { useState, useContext, createContext, useEffect } from "react";

const config = {
    title: ''
}

export const ConfigContext = createContext(config);

export const ConfigContextProvider = ({ children }) => {
    const [configState, setConfigState] = useState(config);

    const values = React.useMemo(
      () => ({
        configState, // States que seran visibles en el contexto.
        setConfigState, // Funciones que son exportadas para manejo externo.
      }),
      [configState]
    ); // States que serán visibles en el contexto.
  
    // Interface donde será expuesto como proveedor y envolverá la App.
    return (
      <ConfigContext.Provider value={values}>{children}</ConfigContext.Provider>
    );
};

export function useConfigContext() {
    const context = useContext(ConfigContext);
  
    if (!context) {
      console.error("Error deploying App Context!!!");
    }
  
    return context;
}
  
export default useConfigContext;