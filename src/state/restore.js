import { useContext, useEffect } from "react";
import { Context } from "../state/store";
import storage from "../helper/storage";

const Restore = ({ children }) => {
  const [state, dispatch] = useContext(Context);
  const theme = state.theme;

  useEffect(() => {
    let process = async () => {
      try {
        /* populate */

        // theme
        const themeBefore = await storage.get("theme");
        const payloadTheme = {
          ...theme,
          theme: themeBefore ? themeBefore : "light",
        };

        /* set to context */
        dispatch({ type: "RESTORE:THEME", payload: payloadTheme });
      } catch (error) {
        console.log(error);
        console.log("failed re-store state");
      }
    };
    process();
  }, []);

  return children;
};

export default Restore;
