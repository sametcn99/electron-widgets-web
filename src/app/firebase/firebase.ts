import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getStorage, ref, StorageReference } from "firebase/storage";

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Get Firebase storage
export const storage = getStorage(app);

// Get storage reference
export const storageRef = ref(storage);

// Create storage reference
export const createRef = (path: string): StorageReference =>
  ref(storageRef, path);
