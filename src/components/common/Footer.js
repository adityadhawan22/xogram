import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  constructor(props){
    super(props);
    this.state={
      type:['inactive', 'active', 'ina  ctive']
    }
  }

  componentDidMount(){
    if(this.props.type === '/:uid'){
      this.setState({type:['inactive', 'inactive', 'active']});
    }
    if(this.props.type === '/'){
      this.setState({type:['active', 'inactive', 'inactive']});
    }
    if(this.props.type === '/create'){
      this.setState({type:['inactive', 'active', 'inactive']});
    }

  }

  render() {

    return (
      <footer>
      <div className="row justify-content-center align-items-center">
        <div className="col-4">
            <Link to="/"><center><i className={"fa fa-home " + this.state.type[0]}></i></center></Link>
         </div>
           <div className="col-4">
           <Link to="/create"><center><i className={"fa fa-plus " + this.state.type[1]}></i></center></Link>
         </div>
           <div className="col-4">
            <Link to="/adityadhawan22"><center><i className={"fa fa-user " + this.state.type[2]} ></i></center></Link>
         </div>
      </div>
    </footer>
    );
  }
}

export default Footer;