const initialState = {
  darkMode: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "DARK":
      return (state = {
        darkMode: true
      });
    case "LIGHT":
      return (state = {
        darkMode: false
      });
    default:
      return state;
  }
}
