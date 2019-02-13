import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import '../../assets/style.css';

const Header = () => {
	return (
	 	<header>
     		<Link to="/"> <img src={logo} className="logo" width="120px" /> </Link>
   		</header>
	)
};

export default Header;