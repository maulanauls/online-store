const initialState = {
  theme: "light",
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    case "RESTORE:THEME":
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default theme
