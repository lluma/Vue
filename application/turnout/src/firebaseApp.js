import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDk-21MDhhOICYEQLSbrQUF6Yugo-IuBAE",
    authDomain: "turnout-f9c8e.firebaseapp.com",
    databaseURL: "https://turnout-f9c8e.firebaseio.com",
    projectId: "turnout-f9c8e",
    storageBucket: "turnout-f9c8e.appspot.com",
    messagingSenderId: "1052716316994"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
