import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdKM5EGf7h_ghFANuXhj0I3URlzJgHn8w",
    authDomain: "reactjs-2234a.firebaseapp.com",
    databaseURL: "https://reactjs-2234a.firebaseio.com",
    projectId: "reactjs-2234a",
    storageBucket: "reactjs-2234a.appspot.com",
    messagingSenderId: "41090250087"
  })

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
	'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base