const { onCall, firestore, responseError } = require('../firebaseTools');
const { looper } = require("./../utils/tools");

const handleGetPreferedDestinations = onCall(async (data, context) => {
    try{
        const destinations = await firestore.collection("destinations").where("categories", 'array-contains-any', data).get();
        return JSON.stringify(looper(destinations));
    }catch (e) {
        throw new responseError(
            "failed",
            "not found"
        );
    }
});

module.exports = handleGetPreferedDestinations;

