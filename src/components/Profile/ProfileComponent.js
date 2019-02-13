import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ImageList from './ImageList';

class ProfileComponent extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<div className="row justify-content-center align-items-center">
        			<div className="col-11 col-lg-4 col-md-5 ">
         
        			</div>
      			</div>
      			 <div>
			        <div className="row justify-content-center align-items-center"> 
			          <div className="col-11 col-lg-4 col-md-5 col-xs-12">
			            <div className="row justify-content-center align-items-center">
			              <div className="col-4">
			                <Link to="/"><i className="fa fa-arrow-left" /></Link>&nbsp;&nbsp;
			              </div>  
			              <div className="col-4">
			              	<h3>{this.props.profile[0].username}</h3>
			              </div> 
			              <div className="col-4">
			                <i className="fa location-arrow"></i>
			              </div> 
			            </div>
			          </div>
			        </div>
			        <br />
			        <div className="row justify-content-center align-items-center"> 
			          <div className="col-11 col-lg-4 col-md-5 col-xs-12">
			            <div className="row justify-content-center align-items-center">
			              <div className="col-3 ">
			                <div className="image-avatar">
			                  <img src={this.props.profile[0].dp} />
			                </div>
			              </div>  
			              <div className="col-5 my-auto text-left">
			                <h3>{this.props.profile[0].name}  <span className="lower"> {this.props.profile[0].lower} </span></h3>
			              </div> 
			              <div className="col-4">
			                <button className="btn">Edit Profile</button>
			              </div> 
			            </div>
			          </div>
			        </div>
			      </div>

			      <div>
			        <div className="row justify-content-center align-items-center"> 
			          <div className="col-11 col-lg-4 col-md-5 col-xs-12">
			            <div className="row justify-content-center align-items-center">
			              <div className="col-12 ">
			                <p> {this.props.profile[0].bio} </p>
			                <hr />
			              </div>  
			            </div>
			          </div>
			        </div>
			        <div className="row justify-content-center align-items-center"> 
			          <div className="col-11 col-lg-4 col-md-5 col-xs-12">
			            <div className="row justify-content-center align-items-center">
			              <div className="col-4 my-auto ">
			                <b>{this.props.profile[0].posts}</b><br /> <span> Posts </span>
			              </div>  
			              <div className="col-4 my-auto ">
			                <b>{this.props.profile[0].followers}</b><br /> <span> Followers </span>
			              </div>  
			              <div className="col-4 my-auto ">
			                <b>{this.props.profile[0].follwing}</b><br /> <span> Following </span>
			              </div>  
			            </div>
			            <hr />
			          </div>
			        </div>
			      </div>

			      <div className="images">
			      	<ImageList images={this.props.profile[0].images}/>
			      </div>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		profile : state.profile.user
	}
}


export default connect(mapStateToProps)(ProfileComponent);