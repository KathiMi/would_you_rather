export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export const loginUser = (id) => {
  return (dispatch) => {
    dispatch(setAuthedUser(id));
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(setAuthedUser(null));
  };
};
