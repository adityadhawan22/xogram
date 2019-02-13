export const getProfile = (username) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		dispatch({ type: 'GET_PROFILE_REQUEST' });
		const firestore = getFirestore();
		let post = [];

		firestore.collection('users').where("username", "==", username).limit(1).get()
		.then((res)=>{
			
			res.forEach(function(doc) {
		        post.push(doc.data());
		    });
			console.log(post);
			

			firestore.collection('posts').where("username", "==", username).limit(30).get()
			.then((res)=>{
				post[0].images = [];
				res.forEach(function(doc) {
					let id = doc.id;
					let data = doc.data();
					post[0].images.push({id, ...data});
				})
				dispatch({type: 'SET_PROFILE', payload:post});
			})
			.catch((err)=>{
				dispatch({type: 'SET_PROFILE', payload:[]})
			})
		})
		.catch((err)=>{
			dispatch({type: 'SET_PROFILE', payload:[]})
		})
	}
};