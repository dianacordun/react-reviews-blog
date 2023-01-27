import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Activity</span>
          <ul className="notifications">
            { notifications && notifications.map(activity => {
              return (
                <li key={activity.id}>
                  <span className="pink-text">{activity.user}</span>
                  <span> {activity.content}</span>
                  <div className="grey-text activity-date">
                    {moment(activity.time.toDate()).fromNow()}
                  </div>
                </li>
              )
            }) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications