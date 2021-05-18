import firebase from "firebase/app";

export const useFirebaseExamples = (collectionId: string) => {
  function getCollectionReference() {
    return firebase.app().firestore().collection(collectionId);
  }

  function callFunction() {
    firebase.app().functions().httpsCallable("fetchPrivateInformation");
  }

  /** Basic type of adding documents */
  function pushExample(exampleData: any) {
    // getCollectionReference().doc("ne postoji").set(exampleData);
    getCollectionReference().add(exampleData);
  }

  /** Basic fetch to get all relevant documents once. */
  async function getAllExamples() {
    const resultPromise = await getCollectionReference().get();
    const resolvedItems = resultPromise.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
      // return doc.data();
    });

    return resolvedItems;
  }

  /** Used to fetch only filtered documents from Firestore. Used when fetching only documents belonging to a certain user, filtering by search field, fetching single type of documents, and other... */
  async function getSomeExamples() {
    const resultPromise = await getCollectionReference()
      .where("description", "==", "dva")
      .get();

    const resolvedItems = resultPromise.docs.map((doc) => {
      return doc.id, doc.data();
    });

    return resolvedItems;
  }

  /** Sets up a listener function while returning a reference to a unsubscribe function for cleanup purposes. */
  function setListenerForAllExamples() {
    const unsubscribeListener = getCollectionReference().onSnapshot(
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Success dispatch na Redux
        console.log(items);

        return items;
      }
    );

    return unsubscribeListener;
  }

  return {
    pushExample,
    getAllExamples,
    setListenerForAllExamples,
    getSomeExamples,
    callFunction,
  };
};
