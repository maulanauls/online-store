const initialState = {
  authToken: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        authToken: action.payload,
      };

    case "SET_LOGOUT":
      return initialState;

    default:
      return state;
  }
};
