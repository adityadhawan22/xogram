import { storage } from '../../config/firebaseConfig';

export const likePicture = (postId) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		console.log('LIKE');
		setTimeout(()=> dispatch({type: 'LIKE_PICTURE', postId}),1000);
	}
};

// fetch('https://source.unsplash.com/random').then((res)=>{
// 	firestore.collection('posts').add({
// 		comments: Math.floor((Math.random() * 500) + 1),
// 		likes: Math.floor((Math.random() * 400) + 1),
// 		date: new Date().getTime();,
// 		description: 'Lorem ipsum dolar sit amet',
// 		image: res.url,
// 		profile_image: "https://images.unsplash.com/photo-1548455142-9d8b3a2e30bf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
// 		tags: ['tag'],
// 		username:'adityadhawan22',
// 	});
// });


export const getPosts = () => {
	console.log("1212121")
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
// 		firestore.collection('posts').add({
// 	comments: 12,
// 	likes: 123,
// 	date: new Date().getTime();,
// 	description: 'test',
// 	image: "https://instagram.fdel1-3.fna.fbcdn.net/vp/2627bdc22da00dff157a7c0e81620bcf/5CE5FBFE/t51.2885-15/e35/30591139_669486510049225_6093331482212827136_n.jpg?_nc_ht=instagram.fdel1-3.fna.fbcdn.net&se=7",
// 	profile_image: "https://instagram.fdel1-3.fna.fbcdn.net/vp/2627bdc22da00dff157a7c0e81620bcf/5CE5FBFE/t51.2885-15/e35/30591139_669486510049225_6093331482212827136_n.jpg?_nc_ht=instagram.fdel1-3.fna.fbcdn.net&se=7",
// 	tags: ['tag'],
// 	username:'test',
// 	uid:1
// })

// fetch('https://source.unsplash.com/random').then((res)=>{
// 	firestore.collection('posts').add({
// 		comments: Math.floor((Math.random() * 500) + 1),
// 		likes: Math.floor((Math.random() * 400) + 1),
// 		date: new Date().getTime(),
// 		description: 'Lorem ipsum dolar sit amet',
// 		image: res.url,
// 		profile_image: "https://images.unsplash.com/photo-1548455142-9d8b3a2e30bf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
// 		tags: ['tag'],
// 		username:'adityadhawan22',
// 	});
// });
		// storage.ref('').child('images/Screenshot 2018-12-27 at 1.31.14 PM.png').delete().then((res)=>{
		// 	console.log(res);
		// })
		// getFirebase().storage().uploadFile()
		// .then(()=>{})
		// .catch((e)=>{})
		firestore.collection('posts').orderBy("date").limit(10).get()
		.then((res)=>{
			let post = [];
			res.forEach(function(doc) {
		        post.push(doc.data());
		    });
			
			dispatch({type: 'GET_POSTS', posts:post});
		})
	}
};


export const getMore = () => {
	console.log("Get more")
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		
		firestore.collection('posts').orderBy("date").startAt(getState().feed.posts[getState().feed.posts.length-1].date).limit(10).get()
		.then((res)=>{
			let post = [];
			res.forEach(function(doc) {
		        post.push(doc.data());
		    });
			console.log(post);
			dispatch({type: 'LOAD_MORE', payload:post});
		})
	}
}



