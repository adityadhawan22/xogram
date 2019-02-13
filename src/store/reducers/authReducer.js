const initState = {
	posts: [{
		profile_image : 'https://instagram.fdel1-3.fna.fbcdn.net/vp/390ad64a365e88b352c049b8992208ac/5CE8BF08/t51.2885-15/e35/51256970_115159859577600_4836208754395703043_n.jpg?_nc_ht=instagram.fdel1-3.fna.fbcdn.net',
		username : 'kylie_versosa',
		date: '2 hours ago',
		image : 'https://instagram.fdel1-3.fna.fbcdn.net/vp/e7fc404b6d606f9796d2944206e18352/5CDF613A/t51.2885-15/e35/51078419_818088908527873_8650786633990386494_n.jpg?_nc_ht=instagram.fdel1-3.fna.fbcdn.net',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		tags : ['tag1', 'tag2'],
		likes: 232,
		share: 123,
		comments: 22
	},
	{
		profile_image : 'https://instagram.fdel1-3.fna.fbcdn.net/vp/390ad64a365e88b352c049b8992208ac/5CE8BF08/t51.2885-15/e35/51256970_115159859577600_4836208754395703043_n.jpg?_nc_ht=instagram.fdel1-3.fna.fbcdn.net',
		username : 'kylie_versosa',
		date: '2 hours ago',
		image : 'https://instagram.fdel1-3.fna.fbcdn.net/vp/e7fc404b6d606f9796d2944206e18352/5CDF613A/t51.2885-15/e35/51078419_818088908527873_8650786633990386494_n.jpg?_nc_ht=instagram.fdel1-3.fna.fbcdn.net',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		tags : ['tag1', 'tag2'],
		likes: 232,
		share: 123,
		comments: 22
	}

	]
};

const profileReducer = (state = initState, action) => {
	return state;	
}

export default profileReducer;