import { auth } from "firebase-functions";

/**
 * Trigger function that sends a welcome e-mail to to new user
 */
export const onUserCreate = auth.user().onCreate(async (user) => {
  if (!user || !user.email) {
    return console.error("Failed to generate new user");
  }

  console.log({ user });

  // Send welcome email

  // Create Firestore entries

  // Other...
});
