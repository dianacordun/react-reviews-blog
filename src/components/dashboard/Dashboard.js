import React, { Component } from 'react';
import ReviewList from '../review/ReviewList';
import Notifications from './Notifications';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    const { reviews } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ReviewList reviews={reviews}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.firestore.ordered.reviews
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'reviews' }
  ])
)(Dashboard)