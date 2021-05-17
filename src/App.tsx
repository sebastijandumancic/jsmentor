import React, { useEffect } from "react";
import "./App.css";
import { FirebaseAuthProvider } from "./FirebaseAuthProvider";
import { FirebaseProvider } from "./FirebaseProvider";

export const App: React.FC = () => {
  // const { setListenerForAllExamples } = useFirebaseExamples("examples");

  useEffect(() => {
    // pushExample({ test: "jedan", description: "dva" });
    // getAllExamples().then((items) => console.log({ items }));
    // const unsubscribeListener = setListenerForAllExamples();
    // return unsubscribeListener;
  }, []);

  return (
    <FirebaseProvider>
      <FirebaseAuthProvider>
        <div className="App">
          <h1>JS Mentor</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
            repellendus. Illum incidunt consequuntur expedita delectus ex,
            molestiae eligendi, fugit placeat recusandae maiores earum adipisci
            ducimus nisi aliquid doloremque cumque sapiente?
          </p>
        </div>
      </FirebaseAuthProvider>
    </FirebaseProvider>
  );
};
