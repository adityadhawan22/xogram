const initState = {
	user:[],
	isFetching: true
};

const profileReducer = (state = initState, action) => {
	switch(action.type){
		case 'SET_PROFILE':
			return {
				user: action.payload,
				isFetching: false
			}
		case 'GET_PROFILE_REQUEST':
			return{
				...state,
				isFetching: true
			}
		default:
			return{
				...state
			}
	}	
}

export default profileReducer;