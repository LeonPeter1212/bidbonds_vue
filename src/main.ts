import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Firebase config
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeAfPmAMKLG45ggsbFEfqN7ZvFfRGDm58",
  authDomain: "bunisha.firebaseapp.com",
  projectId: "bunisha",
  storageBucket: "bunisha.appspot.com",
  messagingSenderId: "137584708743",
  appId: "1:137584708743:web:19d01fc38c08363164bc22"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      }, reject
    )
  })
}

// Router auth
router.beforeEach(async(to, from, next) => {
  
  // console.log(to.name == 'signup' || to.name == 'login');
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // console.log(store.getters.getLogged);
    
    if (await getCurrentUser() == null) {
      next({ name: 'login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

createApp(App).use(store).use(router).mount("#app");
