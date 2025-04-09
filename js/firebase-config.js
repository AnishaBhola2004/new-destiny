// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyD7iwEG3PAlxvFUn1yaEE8C4_DcMw7j8XA",
    authDomain: "destiny-trails-ea2d8.firebaseapp.com",
    projectId: "destiny-trails-ea2d8",
    storageBucket: "destiny-trails-ea2d8.appspot.com",
    messagingSenderId: "354802450962",
    appId: "354802450962-kfd0tq7e5tc6ftpjilf625shgiq7tpkd.apps.googleusercontent.com"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // Enable offline persistence
  try {
    db.enablePersistence();
  } catch (err) {
    if (err.code === 'failed-precondition') {
      console.log('Persistence failed - multiple tabs open');
    } else if (err.code === 'unimplemented') {
      console.log('Persistence not available');
    }
  }