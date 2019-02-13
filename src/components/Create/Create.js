import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { connect } from 'react-redux';
import { getImage } from '../../store/actions/postAction';
import Croppie from 'croppie';
import {storage} from '../../config/firebaseConfig'; 

let resize = null;

class Create extends Component {
	constructor(props){
		super(props);
		this.state = {
			added: false,
			blob:'',
			step:0,
			data: [],
			loading:true

		}

		this.clickHandle = this.clickHandle.bind(this);
	}

	componentWillUpdate(){

	}

	handleUpload(){
		if(document.getElementById('file').files.length === 0){
			console.log("No file")
			return false;
		}

		var src = window.URL.createObjectURL(document.getElementById('file').files[0]);
		console.log(src);
		resize = new Croppie(document.getElementById('demo'), {
			url: src,
			viewport: { width: 300, height: 300 },
		    boundary:{ width: '100%', height: 350 },
		    showZoomer: false,
		    enableResize: false,
		    enableOrientation: true,
		    mouseWheelZoom: 'ctrl'
		});

		this.setState({added:true});
		document.querySelectorAll("#file")[0].className="hide";
	}

	clickHandle(){
		let _this = this;
		resize.result({type:'blob', size:{width:1000, height:1000}}).then(function(blob) {
		    console.log(blob)
		    _this.setState({blob, step:1})
		    let src = window.URL.createObjectURL(blob)
		    console.log(src)
		});
	}

	submitData(){
		const random = Math.floor((Math.random() * 100000000) + 1);
		storage.ref('').child('images/'+random+'.png').put(this.state.blob).then((snapshot)=>{
			storage.ref('').child('images/'+random+'.png').getDownloadURL().then((url)=>{
				console.log(url);
			})
		});
	}

	handleKeys(e){
		this.setState({desc: e.target.value}); 
		if(e.target.value[e.target.value.length-1] === ' '){
			this.setState({hastag:false})
			return false;
		}
		if(e.target.value.indexOf(" #") > -1){
			console.log(1);
			if(e.target.value.split("#")[e.target.value.split("#").length-1].indexOf(" ") > -1){
				this.setState({hastag:false});	
				return false;
			}
			this.setState({last: e.target.value.split("#")[e.target.value.split("#").length-1] })
			this.setState({hastag:true});
			if(this.state.hastag){
			fetch('https://geek-jokes.sameerkumar.website/api',{mode: 'cors'})
			.then((res)=>{return res.json()})
			.then(data=>{ this.setState({loading:false, data: data.split(" ")}) })
		}

		}else{
			this.setState({hastag:false})	
		}
		
	}

	appendTag(a){
		this.setState({desc: this.state.desc+a+" ", hastag:false});
	}

	getData(){
		let a = this.state.data.map((i)=>{
			console.log(i)
			return	<div onClick={()=>this.appendTag(i.toLowerCase())} className="item-low">{"#" + i.toLowerCase()}</div>
		});
		return a;
	}



	render(){
		
		return(
			<div>
				<Header/>
				<input type="file" onChange={()=>this.handleUpload()} id="file"/>

				<div class="row justify-content-center align-items-center">
					<div class="col-11 col-lg-4 col-md-5 col-xs-12 ">	
							{(this.state.step === 0) ? <div id="demo"></div> : ""}
							<div className="col-12">
								{this.state.added ? (this.state.step === 0)?<button onClick={this.clickHandle}> Next </button>:"" :""}
							</div>

						<div className="form-group">
						    {(this.state.step === 1) ?  <p>Bio<textarea value={this.state.desc} onChange={(e)=>{this.handleKeys(e)}} type="email" className="form-control" id="email"/></p> : ""}
						   
						</div>
						{this.state.hastag ? 						
							<div className="">
								{
									this.state.loading ? <p>Loading..</p> : this.getData()
									
								}	

							</div> : ""}

					</div>
					</div>
				<Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Create);