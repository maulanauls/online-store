const initialState = {
  theme: "light",
};

export default (state = initialState, action) => {
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
