const { admin } = require('./firebaseTools');
admin.initializeApp();

//Handlers
const handleGetPreferedDestinations = require("./handlers/getPreferedDestinations");

//End Points
exports.getPreferedDestinations = handleGetPreferedDestinations;
