export const createReview = (review) => {
return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('reviews').add({
    ...review,
    authorFirstName: profile.firstName,
    authorLastName: profile.lastName,
    authorId: authorId,
    createdAt: new Date()
    }).then(() => {
        dispatch({ type: 'CREATE_REVIEW_SUCCESS' }); // this will only execute after the add task is complete
    }).catch(err => {
        dispatch({ type: 'CREATE_REVIEW_ERROR' }, err);
    });
}
};