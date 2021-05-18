import firebase from "firebase/app";
import React, { useEffect } from "react";
import "./App.css";
import { FirebaseAuthProvider } from "./FirebaseAuthProvider";
import { FirebaseProvider } from "./FirebaseProvider";
import { useFirebaseExamples } from "./useFirebaseExamples";

export const App: React.FC = () => {
  const { getSomeExamples, callFunction } = useFirebaseExamples("examples");

  useEffect(() => {
    // pushExample({ test: "jedan", description: "tri" });
    // getAllExamples().then((items) => console.log({ items }));
    // getSomeExamples().then((items) => console.log({ items }));
    // const unsubscribeListener = setListenerForAllExamples();
    // return unsubscribeListener;
    // callFunction();
    firebase.app().functions().httpsCallable("fetchPrivateInformation");
  }, []);

  return (
    <FirebaseProvider>
      <FirebaseAuthProvider>
        <div className="wrapper">
          <div className="App">
            <h1>JS Mentor</h1>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
              repellendus. Illum incidunt consequuntur expedita delectus ex,
              molestiae eligendi, fugit placeat recusandae maiores earum
              adipisci ducimus nisi aliquid doloremque cumque sapiente?
            </p>
          </div>
        </div>
      </FirebaseAuthProvider>
    </FirebaseProvider>
  );
};
