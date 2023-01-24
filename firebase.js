import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyAfYq4T-9H65QPFCpPE4k-edR8C7oqu3hE",
  authDomain: "weddingdb-4a324.firebaseapp.com",
  projectId: "weddingdb-4a324",
  storageBucket: "weddingdb-4a324.appspot.com",
  messagingSenderId: "605112971285",
  appId: "1:605112971285:web:bd6ab1dc268b3fffbb1e1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const userCollectionRef = collection(db, 'gifts')

console.log(userCollectionRef)

// getDocs(userCollectionRef)
//     .then(querySnapshot => {
//         const giftsList = querySnapshot.docs.reduce((acc, doc) => {
//             acc += <li ${doc.data().description} />
//             console.log(acc)
//             return acc
//         }, '')
//         const giftsItems = document.querySelector('[data-js="gifts-list"]')
//         giftsItems.innerHTML = giftsList
//     })
//     .catch(console.log)