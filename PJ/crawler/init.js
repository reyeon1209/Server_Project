// Admin SDK 사용할 경우
var admin = require('firebase-admin');
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://server-project-1593785765774.firebaseio.com"
});
