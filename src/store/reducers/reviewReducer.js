const initState = {
    reviews: []
};

const reviewReducer = (state = initState, action) => {
switch (action.type) {
    case 'CREATE_REVIEW_SUCCESS':
        console.log('create review success');
        return state;
    case 'CREATE_REVIEW_ERROR':
        console.log('create review error');
        return state;
    case 'DELETE_REVIEW_SUCCESS':
        console.log('delete review success');
        return state;    
    case 'DELETE_REVIEW_ERROR':
        console.log('delete review error');
        return state;   
    default:
        return state;
}
};
export default reviewReducer