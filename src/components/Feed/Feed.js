import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import FeedPostList from './FeedPostList';
import { likePicture, getPosts, getMore } from '../../store/actions/feedActions';
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import FeedLoader from './FeedLoader';


class Feed extends Component {
	constructor(props){
		super(props);
		this.props.getPicture()
	}

	render(){
		return(
			<div>
				<Header/>
				{(this.props.isloading) ? <FeedLoader/> : <FeedPostList getMore={this.props.getMore} likePicture={this.props.likePicture} profile={this.props.profile}/>}
				
				<Footer type={this.props.match.path}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		profile : state.feed.posts,
		isloading: state.feed.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		likePicture : (post) => dispatch(likePicture(post)),
		getPicture : () => dispatch(getPosts()),
		getMore: () => (dispatch(getMore()))
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Feed);