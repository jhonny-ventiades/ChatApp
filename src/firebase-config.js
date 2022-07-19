/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
  const config = {
    apiKey: "AIzaSyDB8MmmdYcnb3yLCywiqaLVt0mOyB8bTsc",
    authDomain: "mychatapp-8090d.firebaseapp.com",
    databaseURL: "https://mychatapp-8090d.firebaseio.com",
    projectId: "mychatapp-8090d",
    storageBucket: "mychatapp-8090d.appspot.com",
    messagingSenderId: "630369822718",
    appId: "1:630369822718:web:e7c6a08ce927953bae42af"
  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }