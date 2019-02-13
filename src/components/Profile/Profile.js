import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ProfileComponent from './ProfileComponent';
import { connect } from 'react-redux';
import { getProfile } from '../../store/actions/profileActions';
import ProfileLoader from './ProfileLoader';

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			loading:true
		}
	}

	componentDidMount(){
		this.props.getProfileData(this.props.match.params.uid);
	}


	checkProfile(){
		if(this.props.profile.length === 0){
			this.props.history.push("/")
			return "";
		}

		return <ProfileComponent redirect={this.props.history.push} profile={this.props.profile}/>;
	}

	render(){
		console.log("LOad",this.props.isLoading);
		return(
			<div>
				<Header/>
				{(this.props.isLoading) ? <ProfileLoader/> : this.checkProfile() }
				<Footer type={this.props.match.path}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		profile : state.profile.user,
		isLoading: state.profile.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getProfileData: (uname) => dispatch(getProfile(uname)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);