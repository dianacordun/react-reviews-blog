export const createReview = (review) => {
return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('reviews').add({
    ...review,
    authorFirstName: 'alex',
    authorLastName: 'ion',
    authorId: 12345,
    createdAt: new Date()
    }).then(() => {
    dispatch({ type: 'CREATE_REVIEW_SUCCESS' });
    }).catch(err => {
    dispatch({ type: 'CREATE_REVIEW_ERROR' }, err);
    });
}
};