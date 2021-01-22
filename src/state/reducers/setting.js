const initialState = {
  authToken: "",
};

const setting = (state = initialState, action) => {
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

export default setting;
