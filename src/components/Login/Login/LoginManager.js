import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then((res) => {
            const { displayName, email } = res.user;
            const signInUser = {
                isSignIn: true,
                name: displayName,
                email,
                success: true,
            };
            return signInUser;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const handleSignOut = () =>
    firebase
        .auth()
        .signOut()
        .then(() => {
            const signOutUser = {
                isSignIn: false,
                name: '',
                email: '',
                error: '',
                success: false,
            };
            return signOutUser;
        })
        .catch((err) => {
            console.log(err);
        });
