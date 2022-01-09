import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import firebaseCreds from './firebase.json'

const settings = {timestampsInSnapshots: true};

firebase.initializeApp(firebaseCreds);

firebase.firestore().settings(settings);

export default firebase;