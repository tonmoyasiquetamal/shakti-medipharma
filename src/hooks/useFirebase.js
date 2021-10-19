import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../components/Firebase/firebase.init'

/*<-----Initializing Authentication For Use Google Sign in-----> */
initializeAuthentication();

/*<-----Use Firebase Data With UseState-----> */
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    /*<-----getAuth For Google Provider-----> */
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    /*<-----Registering NewUser With Mail & Pass if Criteria Not Fullfill 
    Then Give Error Other Wise Successfully Register -----> */
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    /*<-----Displaying User Name-----> */
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { });
    }
    
/*<-----Sign In User While Use Mail & Pass-----> */
    const signInUsingEmailPassword = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
  
/*<-----Sign In User While Google-----> */
    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    /*<-----Observing User State Change Is The Browser Tab-----> */
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

/*<-----LogOut State-----> */
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        signInUsingGoogle,
        isLoading,
        logOut,
        signInUsingEmailPassword,
        registerNewUser
    }
};

export default useFirebase;