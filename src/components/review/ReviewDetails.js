import React from 'react';
import { useParams} from 'react-router-dom';

const ReviewDetails = () => {
  let {id} = useParams();
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Review title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Diana</div>
          <div>now</div>
        </div>
      </div>
    </div>
  )
}

export default ReviewDetails