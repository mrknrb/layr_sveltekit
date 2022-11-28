// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBWerk1aFeAjWCXwvxcWTDo72X9-igHp88',
	authDomain: 'diylifestyle-fb511.firebaseapp.com',
	projectId: 'diylifestyle-fb511',
	storageBucket: 'diylifestyle-fb511.appspot.com',
	messagingSenderId: '31272043630',
	appId: '1:31272043630:web:f108038413b65afdf4127f',
	measurementId: 'G-WE7RMYS691'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebaseApp);
export default firebaseApp;
