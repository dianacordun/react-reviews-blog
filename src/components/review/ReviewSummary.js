import React from 'react';

const ReviewSummary = ({review}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{review.title}</span>
        <p>Posted by Diana</p>
        <p className="grey-text">now</p>
      </div>
    </div>
  )
}

export default ReviewSummary