function login(id, password) {
  return (dispatch, getState) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    console.log("login success action");
  };
}

export const authenticateAction = { login };
