const initState = {
	post:[],
	isFetching: true
};

const postReducer = (state = initState, action) => {
	switch(action.type){
		case 'SET_POST':
			return {
				post: action.payload,
				isFetching: false
			}
		case 'GET_POST_REQUEST':
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

export default postReducer;