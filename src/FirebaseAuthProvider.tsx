import firebase from "firebase";
import { useEffect } from "react";
import { useAuthSubscription } from "./useAuthSubscription";

export const FirebaseAuthProvider: React.FC = ({ children }) => {
  useAuthSubscription();

  // Mock succesfull login
  useEffect(() => {
    firebase
      .app()
      .auth()
      .signInWithEmailAndPassword("sebastijan@prototyp.digital", "12344321")
      .then((_user) => {
        // Don't have to do anything with the user here
      })
      .catch((err) => {
        // Show the error to the user.
        console.error(err);
      });
  }, []);

  // handle loading state based on user object in Redux.

  return <>{children}</>;
};
