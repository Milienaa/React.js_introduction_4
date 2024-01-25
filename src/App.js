import React, { Component } from 'react';
import './app.scss';
import Info from "./Info";
import Pic from "./Pic";
import ReviewItem from "./ReviewItem";
import review from "./allReviews";

export default class App extends Component {
  render() {
    return (
      
        <div className="wrapper">
          <div className="info">
            <Info/>
            <Pic/>
          </div>
          <div className="review">
            <h2>Рецензії</h2>
            {review.map(elem => <ReviewItem
                                        key = {elem.id}
                                        text = {elem.text} />)}
          </div>
        </div>
    );
}
}