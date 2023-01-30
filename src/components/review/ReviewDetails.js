import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import firebase from '../../config/fbConfig';

const ReviewDetails = (props) => {
  const { review, auth } = props;
  if (!auth.uid) return <Redirect to='/signin'/>

  function handleClick() {
    deleteReview(props.match.params.id);
    props.history.push('/');
  }

  const deleteReview = (id) => {
    const firestore = firebase.firestore();
    firestore.collection("reviews").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  };

  if(review){
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{review.title}</span>
            <p>{review.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            {(auth.uid === review.authorId) ? (
              <div>
                <div className="post-details">Posted by you </div> 
                <button className="btn pink lighten-1 delete-post" onClick={handleClick}>Delete &#128465; </button> 
              </div>  ) : <div>Posted by {review.authorFirstName} {review.authorLastName}</div>}
            <div>{moment(review.createdAt.toDate().toString()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading review...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const reviews = state.firestore.data.reviews;
  const review = reviews ? reviews[id] : null
  return {
    review: review,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'reviews'
  }])
)(ReviewDetails)
