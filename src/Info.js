import React, { Component } from 'react';
import Title from "./Title";
import Author from "./Author";
import Genre from "./Genre";
import Pages from "./Pages";

export default class Info extends Component {
    render() {
        return(
            <>
                <div className="info__description">
                    <Title/>
                    <Author/>
                    <Genre/>
                    <Pages/>
                </div>
            </>
        );
    }
}