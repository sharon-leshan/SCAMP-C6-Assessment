import { Avatar, IconButton } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import './profile.css';
import user from '../assets/images/user.jpg';

const Profile = () => {
	return (
		<div className="profile">
			<IconButton>
				<ShoppingCartOutlined />
			</IconButton>
			<Avatar src={user} alt="profile avatar" id="avatar" />
		</div>
	);
};

export default Profile;
