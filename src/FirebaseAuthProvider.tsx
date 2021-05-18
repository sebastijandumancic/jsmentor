import firebase from "firebase/app";
import { useEffect } from "react";
import { useAuthSubscription } from "./useAuthSubscription";

export const FirebaseAuthProvider: React.FC = ({ children }) => {
  useAuthSubscription();

  // Mock successful login
  useEffect(() => {
    firebase
      .app()
      .auth()
      .signInWithEmailAndPassword("sebastijan@prototyp.digital", "12344321")
      .then((_user) => {
        // Don't have to do anything with the user here
      })
      .catch((err: firebase.FirebaseError) => {
        // Show the error to the user.
        if (err.code === '"auth/wrong-password"') {
          // dispatch error to redux
        }
      });
  }, []);

  // handle loading state based on user object in Redux.

  return <>{children}</>;
};
