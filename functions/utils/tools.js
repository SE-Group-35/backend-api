function firebaseLooper(snapshot) {
    const data = [];
    snapshot.forEach(doc => {
        data.push({
            id: doc.id,
            ...doc.data()
        })
    });
    return data;
}



module.exports = {
    looper: firebaseLooper
}