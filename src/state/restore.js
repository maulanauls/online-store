import { useContext, useEffect } from "react";
import { Context } from "../state/store";
import storage from "../helper/storage";

const Restore = ({ children }) => {
  const [state, dispatch] = useContext(Context);
  const theme = state.theme;

  useEffect(() => {
    let process = async () => {
      try {
        const themeBefore = await storage.get("theme");
        const payloadTheme = {
          ...theme,
          theme: themeBefore ? themeBefore : "light",
        };
        dispatch({ type: "RESTORE:THEME", payload: payloadTheme });
      } catch (error) {
        console.log(error);
        console.log("failed re-store state");
      }
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};

export default Restore;
