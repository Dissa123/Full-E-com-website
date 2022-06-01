// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyB7oxURyh6o2WOPN5i0NJk6VG87hbj-FtY",
  authDomain: "project-photo-store.firebaseapp.com",
  projectId: "project-photo-store",
  storageBucket: "project-photo-store.appspot.com",
  messagingSenderId: "1067871083317",
  appId: "1:1067871083317:web:8a60092d743000cb004a7c",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
