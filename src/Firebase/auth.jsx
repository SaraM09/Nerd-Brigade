// src/firebase/auth.js

import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const doSignOut = async () => {
  return await signOut(auth);
};

export const doPasswordReset = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = async (password) => {
  return await updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = async () => {
  return await sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`
  });
};
