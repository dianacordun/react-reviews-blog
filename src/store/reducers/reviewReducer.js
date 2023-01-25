const initState = {
    reviews: [
        {id: '1', title:'review1', content:'aaaaaaaaaaaaaaaaa'},
        {id: '2', title:'review2', content:'aaaaaaaaaaaaaaaaa'},
        {id: '3', title:'review3', content:'aaaaaaaaaaaaaaaaa'}
    ]
};
const reviewReducer = (state = initState, action) => {
    return state;
};

export default reviewReducer