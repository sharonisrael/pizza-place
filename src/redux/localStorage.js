export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("pizza_state");
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("pizza_state", serializedState);
  } catch {
    // ignore write errors
  }
};
