import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBtqxNG84bza19MJBdRc_BGv0UdHXz79hg",
  authDomain: "mymusicapp-f3f5c.firebaseapp.com",
  projectId: "mymusicapp-f3f5c",
  storageBucket: "mymusicapp-f3f5c.appspot.com",
  messagingSenderId: "596498917733",
  appId: "1:596498917733:web:6a9d1c9200bbbf26cd998c",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
