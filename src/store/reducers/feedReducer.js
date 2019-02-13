const initState = {
	posts:[],
	isFetching: true
};

const feedReducer = (state = initState, action) => {
	switch(action.type){
		case 'LIKE_PICTURE':
			const updatedArray = state.posts.map((res) => res.id === action.postId ? {...res, likes: res.likes+1} : res)
			return {
				...state,
				posts: updatedArray
			}
		case 'GET_POSTS':
			console.log("Get", action.posts);
			return {
				...state,
				posts: action.posts,
				isFetching: false
			}
		case 'LOAD_MORE':
			console.log("MORE", action.payload)
			return{
				...state,
				posts: state.posts.concat(action.payload)
			}
		case 'RESET':
			return{
				...state,
				isFetching: true
			}

		default:
			console.log(1111)
			return{
				...state
			}
	}	
}

export default feedReducer;