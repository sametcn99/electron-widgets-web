import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getStorage, ref, StorageReference } from "firebase/storage";

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const storageRef = getStorage(app);
export const createRef = (path: string): StorageReference =>
  ref(storageRef, path);
