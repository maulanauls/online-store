import storage from "../../helper/storage";

const theme = {
  setTheme: async (dispatch, payload) => {
    try {
      await storage.remove("theme");
      await storage.set("theme", payload);
      dispatch({ type: "SET_THEME", payload });
    } catch (error) {
      console.log(this, error);
    }
  },
};

export default theme;
