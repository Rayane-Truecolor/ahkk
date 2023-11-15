// authReducer.js

// Actions types
const LOGOUT = 'LOGOUT';

// Action creators
export const logoutAction = () => ({
  type: LOGOUT,
});

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT:
      // Effacez les informations de l'utilisateur
      return {
        ...state,
        userInfo: null,
      };
    // Autres cas du réducteur
    default:
      return state;
  }
};

export default authReducer;
