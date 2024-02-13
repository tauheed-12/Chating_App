import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAePnyWKmZzTImC34sBnp4SNH5_ly6x2Ek",
  authDomain: "firechat-e5320.firebaseapp.com",
  projectId: "firechat-e5320",
  storageBucket: "firechat-e5320.appspot.com",
  messagingSenderId: "483305974341",
  appId: "1:483305974341:web:da364e91b4a4a7cbd8112c",
  measurementId: "G-GZM14CD7VM"
};
const firebaseApp = initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, firebaseApp,db };

