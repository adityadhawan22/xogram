
export const getPosts = (file) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();

		storage.ref('').put(file).then((res)=>{
			console.log(res);
		})
		getFirebase().storage().uploadFile()
		.then(()=>{})
		.catch((e)=>{})
	
	}
};
