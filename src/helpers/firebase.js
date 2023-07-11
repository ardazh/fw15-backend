var admin = require("firebase-admin")

var serviceAccount = require("../../onceticket-app-450ff-firebase-adminsdk-vmbvh-e63d8e5d73.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

module.exports = admin

