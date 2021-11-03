const { admin, onCall, firestore, responseError } = require("../firebaseTools");

const handleAddUser = onCall(async (data, context) => {
  try {
    const user = await admin
      .auth()
      .createUser({
        email: data.email,
        emailVerified: true,
        password: data.password,

        disabled: false,
      })
      .then((resp) => {
        return firestore.collection("users").doc(resp.user.uid).set({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          telephone: data.telephone,
          userRole: data.userRole,

          Enabled: data.Enabled,
        });
      })
      .then(() => {
        admin
          .auth()
          .sendPasswordResetEmail(email)
          .then(() => {
            // Password reset email sent!
            // ..
          });
      });
    return {
      response: user,
    };
  } catch (error) {
    throw new responseError("Failed to Create a User");
  }
});

module.exports = handleAddUser;
