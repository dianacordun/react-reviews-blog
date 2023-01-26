const initState = {
    reviews: [
        {id: '1', title:'review1', content:'aaaaaaaaaaaaaaaaa'},
        {id: '2', title:'review2', content:'aaaaaaaaaaaaaaaaa'},
        {id: '3', title:'review3', content:'aaaaaaaaaaaaaaaaa'}
    ]
};

const reviewReducer = (state = initState, action) => {
switch (action.type) {
    case 'CREATE_REVIEW_SUCCESS':
        console.log('create review success');
        return state;
    case 'CREATE_REVIEW_ERROR':
        console.log('create review error');
        return state;
    default:
        return state;
}
};
export default reviewReducer