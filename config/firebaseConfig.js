require('dotenv').config();

const admin = require("firebase-admin");


// const {
//   FIREBASE_TYPE,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_PRIVATE_KEY_ID,
//   FIREBASE_PRIVATE_KEY,
//   FIREBASE_CLIENT_EMAIL,
//   FIREBASE_CLIENT_ID,
//   FIREBASE_AUTH_URI,
//   FIREBASE_TOKEN_URI,
//   FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
//   FIREBASE_CLIENT_X509_CERT_URL
// } = process.env

// admin.initializeApp({
//   credential: admin.credential.cert({
//     "type": FIREBASE_TYPE,
//     "project_id": FIREBASE_PROJECT_ID,
//     "private_key_id": FIREBASE_PRIVATE_KEY_ID,
//     "private_key": FIREBASE_PRIVATE_KEY,
//     "client_email": FIREBASE_CLIENT_EMAIL,
//     "client_id": FIREBASE_CLIENT_ID,
//     "auth_uri": FIREBASE_AUTH_URI,
//     "token_uri": FIREBASE_TOKEN_URI,
//     "auth_provider_x509_cert_url": FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
//     "client_x509_cert_url": FIREBASE_CLIENT_X509_CERT_URL
//   })
// });


  
  // admin.initializeApp({
  //   credential: admin.credential.cert({
  //     "type": "service_account",
  //     "project_id": "mebanten-db",
  //     "private_key_id": "301a1a33ad71682ca9c34cbd0b55accccf0e9487",
  //     "private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCvwwOhl2anHz+7\nav4/PmuwADJBFpceRQHvPUPR3YcdClx1N6paE0782piSyWcI3kXbFi/GmM+hn1Sm\n5+bP01MuB0Cd03S+ZeeJa9PJ33k2qs49bhhJjHrt/2sZRKUmeOmafdWyJbDdmFZw\nOuL293F+jZkpnJBXMyh13jd0iYBSmEcRFFL4BIeG+hOoyxo4F5Og4k+R6jZpoSY4\nJiiQXcKgFgKr10CGagos2UBpUMrKaVuOKXrXO+SHvkVLOcxqrL1eikSL56Mo2IRr\n4XXzuEZk7kAjqOpXKbGz5j+NAcxaCZmPQ6CsFBr7abfZWfnnxxr7g00gL3vYgjX8\nQNOWP0rfAgMBAAECggEAC+kCIPwad661aeTZL73yHC4XObPnL6TreaPEKb+CPWSL\nWWIZSBtQ2e+SMTg2pDIzt6HsQN/wCfq7CMhkKqceVtsk9Mz0d0Z+hyBobKCZHSw7\n54vDV5COb/xD7KVrL403/0ERrw3Ay3NcQCStZqDj7vh3bYtveIk976bMSThcGryc\nJ+NnaniOMzYk2JgMRaM+3uKsL4+ZbjXPqQIjZTs5QbaNwYBH+xVcr7rMt1uaYsWl\nz1cawFJZvFCFR4gvaii35ke75T0yezzB6zt4Vo8axGsn+kaoaBQLbrjLIAwZ1hZl\n7YbMoim0tLmvg3qtaiMhmdUmOUB59WXbBdN4wEvNMQKBgQDb4/bNs2MAWwGe5YJj\nfTP0l0W2Y0rlgJHKokBsDimqiqeWeo8fZWEY12Wnd9ujd/pNxhONJu/nb9G4a71O\nxiDHK+hh4YwM/kuJQdCLeN6tVBmwSXJZTISVV7Lu+m5F4dLyr1pFPl/VAyspv0pJ\nfm255RreEfUMlNmOFqq74580SQKBgQDMn+lG510QqvEhxQT9MKCb3AqFzM/LtFvc\nFf7Yni7gv5v+FohRW0s/Ul5NBB24riUBKHj07WTyC4QBmbWepz+UQnK40SW0dlb1\nhAbpGECIUZHYHSjdjSBiH6kXdLQLKCGrFklExr7jMxO2GQM+dWxNQoVAvmhdhFjL\nMZdT1aQ15wKBgQC+3+bobnRc5aLFhKKnrBJCmmGITi7Ag9eKV0emxLCEerG5HRBK\nB52+i5ORSKjfAJHFm1Bzcb5EXztkZBnDXJctbT7eYIRK7x8wuXHG8BgTy3I1Jbxe\nKd7ZKHSJn9fDT6DmyzKH8voLFSINriBVJasn9+lXpazazAcBoUl5qcAUCQKBgFQG\nCgVKdeWlO/TQ8RaChEDb3xpIGr+b5Oh/w7Dxa3BwXb69Q+acZU6wJPbdDNNL9vf9\nxYVVgdD+N4tssa5fIPVhP7hycVgkC9svBqNqiP0w+YFTn/cxvy1rsMRn8JJwPTsC\noL10GugyjhKFPNbF4t3qxcrrJPHZqZhuWaRcItzbAoGBAIddOR1RJK4fCn61CxH6\nl8NQUQuxWS7rW/+9c9ZtpqN7wmdsb7iWzGO258dYvVMk98QlBOUK4fGZ5uMmr1V3\nDjBFHi9SBnKZ3o9DBuOw6nhIjOd3uF1o9T7oxU9FIs9lhVTCsA3f1I2HbL6c5gHG\nwq8mOKQNgnJ2gybWaVG+NXgf\n-----END PRIVATE KEY-----\n",
  //     "client_email": "firebase-adminsdk-wzgr9@mebanten-db.iam.gserviceaccount.com",
  //     "client_id": "111342599166817314447",
  //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //     "token_uri": "https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wzgr9%40mebanten-db.iam.gserviceaccount.com"
  //   })
  // });

  admin.initializeApp({
    credential: admin.credential.cert({
      "type": process.env.FIREBASE_TYPE,
      "project_id": process.env.FIREBASE_PROJECT_ID,
      "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
      "private_key": process.env.FIREBASE_PRIVATE_KEY ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY) : undefined,
      "client_email": process.env.FIREBASE_CLIENT_EMAIL,
      "client_id": process.env.FIREBASE_CLIENT_ID,
      "auth_uri": process.env.FIREBASE_AUTH_URI,
      "token_uri": process.env.FIREBASE_TOKEN_URI,
      "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
      "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
    })
  });

module.exports = admin;
