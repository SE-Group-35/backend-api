const functions = require("firebase-functions");
const admin = require('firebase-admin');

module.exports = {
    admin,
    firestore: admin.firestore(),
    onCall: functions.https.onCall,
    responseError: functions.https.HttpsError
}