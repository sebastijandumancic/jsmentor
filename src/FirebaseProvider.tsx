import firebase from "firebase/app";
import React, { useEffect, useState } from "react";

// Has to be imported like this.
import "firebase/auth";
import "firebase/functions";
import "firebase/storage";
import "firebase/firestore";

export const FirebaseProvider: React.FC = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  const initFirebase = () => {
    /**
     * This is a fix that avoids firebase app re-init on HOT reload
     */
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
      });

      if (process.env.REACT_APP_FIREBASE_ENV === "local") {
        firebase.firestore().useEmulator("localhost", 8080);
        firebase.functions().useEmulator("localhost", 5001);
        firebase.auth().useEmulator("http://localhost:9099");
      }
    }

    setIsReady(true);
  };

  useEffect(initFirebase, []);
  if (!isReady) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};
