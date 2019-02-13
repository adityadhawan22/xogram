import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeedLoader extends Component {
  render() {
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-11 col-lg-4 col-md-5 col-xs-12 ">
          <div className="container-box">
            <div className="row">
              <div className="col-2">
                <div className="img-contrainer">
                  <div className="box img-load"></div>
                </div>
              </div>
              <div className="col-4 my-auto">
                 <h3> <div className="box"></div> </h3>
              </div>
              <div className="col-6 my-auto">
                <span className="time float-right"> <div className="box"></div> </span>
              </div>
            </div>
            <br />
            <div className="row justify-content-center align-items-center">
              <div className="col-12 ">
                <div className="img-main">
                  <div className="box img-load"></div>
                  
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-12 ">
                <p> <div className="box"></div> </p>
                {//this.props.profile.tags.map((i)=>{
                 // return <span key={i} className="hastag">{"#"+i+" "}</span>
                //})
              }
              </div>
            </div>
            <br /><br />
            
          </div>
        </div>
      </div>
      );
  }
}

export default FeedLoader;