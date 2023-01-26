export const createReview = (review) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      dispatch({ type: 'CREATE_REVIEW', review });
    }
  };