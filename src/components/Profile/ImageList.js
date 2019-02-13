import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../common/logo.png';

class ProfileLoader extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const images = this.props.images.map((x, i)=>{
				return i % 4 === 0 ? this.props.images.slice(i, i+3) : null;
		}).filter(x => x != null);

		console.log(images);

		return (
			<div>
			{images.map((i, index)=>{
				return (
				 <div key={index} className="row justify-content-center items"> 
								<div className="col-11 col-lg-4 col-md-5 col-xs-12">
									<div className="row">
										{i.map((item, x) => {
											return (
										<div key={x} className="col-4 my-auto ">
											<Link to={`/post/${item.id}`}>
												<div className="img-thumb" style={{"background": "url("+item.image+")", "background-size": "cover"}}></div>
											</Link>
										</div> 
										)
										})}
										
								</div>
					</div>
					</div>
					)
			})};
			</div>
		);
	}
};

export default ProfileLoader;

