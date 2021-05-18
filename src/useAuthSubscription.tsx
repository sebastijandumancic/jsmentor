import firebase from "firebase";
import { useEffect } from "react";

export function useAuthSubscription() {
  useEffect(() => {
    const subscription = firebase
      .app()
      .auth()
      .onAuthStateChanged(async (user) => {
        console.log({ user });
        if (!user) {
          // handles logout. Dispatch logout action here.
          return;
        }

        console.log({ user: user.toJSON() });
        // Dispatch succesfull login action here
      });

    return () => {
      subscription();
    };
  }, []);
}
