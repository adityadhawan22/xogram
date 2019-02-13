import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { connect } from 'react-redux';
import { getImage } from '../../store/actions/postAction';
import PostImage from './PostImage';

class Post extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.getPost(this.props.match.params.pid);
	}


	checkProfile(){
		if(this.props.post.length === 0){
			this.props.history.push("/")
			return "";
		}

		return <PostImage redirect={this.props.history.push} profile={this.props.post}/>;
	}

	render(){
		console.log("Load",this.props.isLoading);
		return(
			<div>
				<Header/>
				{(this.props.isLoading) ? <div>load</div> : this.checkProfile() }
				<Footer type={this.props.match.path}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		post : state.post.post,
		isLoading: state.post.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPost: (uname) => dispatch(getImage(uname)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);