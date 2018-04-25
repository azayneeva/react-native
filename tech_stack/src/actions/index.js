//the function below is an action creator

export const selectLibrary = libraryId => {
  return {
    type: "select_library",
    payload: libraryId
  };
};
