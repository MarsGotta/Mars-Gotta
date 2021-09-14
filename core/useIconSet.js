import { useEffect } from "react";

export function useIconSet() {
  useEffect(() => {
    import("@web-inmars/mars-awesome-solid/dist/src/MarsAwesomeSolid.js");
    import("@web-inmars/mars-awesome-brands/dist/src/MarsAwesomeBrands.js");
  }, []);
}
