const { admin } = require('./firebaseTools');
admin.initializeApp();

//Handlers
const handleGetPreferedDestinations = require("./handlers/getPreferedDestinations");
const handleAddUser = require("./handlers/addUser");

//End Points
exports.getPreferedDestinations = handleGetPreferedDestinations;
exports.addUser = handleAddUser;
