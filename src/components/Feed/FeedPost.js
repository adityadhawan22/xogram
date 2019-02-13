import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class FeedPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      classn: 'hidden'
    }
    // console.log("Feeeed", this.props);
  }

  handleClick(id){
    console.log("DClick")
    this.props.likePicture(id);
    this.setState({'classn': 'show'});
    setTimeout(()=>{
      this.setState({'classn': 'hidden'});
    }, 600)
  }

  render() {
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-11 col-lg-4 col-md-5 col-xs-12 ">
          <div className="container-box">
            <div className="row">
              <div className="col-2">
                <div className="img-contrainer">
                 <Link to={this.props.profile.username}> <img align="middle" src={this.props.profile.profile_image} /> </Link>
                </div>
              </div>
              <div className="col-4 my-auto">
                <Link to={this.props.profile.username}> <h3> {this.props.profile.username} </h3></Link>
              </div>
              <div className="col-6 my-auto">
                <span className="time float-right"> {this.props.profile.date} </span>
              </div>
            </div>
            <br />
            <div className="row justify-content-center align-items-center">
              <div onDoubleClick={(event)=>{this.handleClick(this.props.profile.id)}} className="col-12 ">
                <div className="img-main">
                  <div className={"overlay " + this.state.classn}>
                    <i className="fa fa-heart"></i>
                  </div>
                  <img className="img-responsive" src={this.props.profile.image} />
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-12 ">
                <p> {this.props.profile.description} </p>
                {
                this.props.profile.tags.map((i)=>{
                 return <span key={i} className="hastag">{"#"+i+" "}</span>
                })
              }
              </div>
            </div>
            <br /><br />
            <div className="row justify-content-center align-items-center">
              <div className="col-4">
                <center><i className="fa icon-s fa-heart-o" /> <b> {this.props.profile.likes} </b></center>
              </div>
              <div className="col-4">
                <center><i className="fa icon-s fa-comment-o active" /> <b> {this.props.profile.comments} </b></center>
              </div>
              <div className="col-4">
                <center><i className="fa icon-s fa-share-square-o" /> <b> {this.props.profile.share} </b></center>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default FeedPost;