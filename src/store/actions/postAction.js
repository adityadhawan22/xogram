export const getImage = (pid) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		dispatch({type:'GET_POST_REQUEST'});

		const firestore = getFirestore();
		// const pid = '3rD4NQJ53Frsop2e8CZs';		
		firestore.collection('posts').doc(pid).get()
		.then((res)=>{
			let post = [res.data()];
			dispatch({type: 'SET_POST', payload:post})
		})
		.catch((err)=>{
			console.log(err);
			dispatch({type: 'SET_POST', payload:[]})
		})

	}
}