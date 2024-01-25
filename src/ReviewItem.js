import React, { Component } from 'react';

export default class ReviewItem  extends Component{
    render() {
        const {text} = this.props;
        return (
            <p className="review__item">{text}</p>
        );
    }
}