import { https } from "firebase-functions";

export const fetchPrivateInformation = https.onCall((_data, context) => {
  console.log({ context });
});
