import React, { useEffect } from "react";
import "./App.css";
import { FirebaseProvider } from "./FirebaseProvider";
import firebase from "firebase/app";

export const App: React.FC = () => {
  useEffect(() => {
    firebase.app().firestore().collection("test").add({ test: "lala" });
  }, []);

  return (
    <FirebaseProvider>
      <div className="App">
        <h1>JS Mentor</h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
          repellendus. Illum incidunt consequuntur expedita delectus ex,
          molestiae eligendi, fugit placeat recusandae maiores earum adipisci
          ducimus nisi aliquid doloremque cumque sapiente?
        </p>
      </div>
    </FirebaseProvider>
  );
};
