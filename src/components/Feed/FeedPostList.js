import React, { Component } from 'react';
import FeedPost from './FeedPost';
import loader from '../../assets/spinner.gif';

class FeedPostList extends Component {
	constructor(props){
		super(props);
		this.state = {
			loading: false
		}

		this.onScroll = this.onScroll.bind(this);
		console.log("feed2",this.props.profile);
	}

	componentDidMount(){
		window.addEventListener('scroll', this.onScroll, false);
	}
	
	onScroll(){
		if(this.state.loading){
			return false;
		}
		  var d = document.documentElement;
		  var offset = d.scrollTop + window.innerHeight;
		  var height = d.offsetHeight;

		  if (offset >= height) {
		  	this.setState({ loading:true });
		   	this.props.getMore();
		   	setTimeout(()=>{this.setState({ loading:false })}, 1000);
		  }
	}

	render(){
		return (
			<div>
			{
				this.props.profile.map((item)=>{
					return <FeedPost profile={item} likePicture={this.props.likePicture} key={item.uid} />
				})
			}
			<br/><br/>

			{(this.state.loading) ? <center><img src={loader} width="40px"/></center> : ""}
			<br/><br/>

			</div>
		)
	}
}

export default FeedPostList;