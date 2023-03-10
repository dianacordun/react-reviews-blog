import React from 'react';
import moment from 'moment/moment';

const ReviewSummary = ({review}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{review.title}</span>
        <p>Posted by {review.authorFirstName} {review.authorLastName}</p>
        <p className="grey-text">{moment(review.createdAt.toDate().toString()).calendar()}</p>  
      </div>
    </div>
  )
}

export default ReviewSummary