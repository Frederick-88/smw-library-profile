import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7UCEHCfpfJTbCiI71184Df5_P9cgiqc8",
  authDomain: "smw-library.firebaseapp.com",
  projectId: "smw-library",
  storageBucket: "smw-library.appspot.com",
  messagingSenderId: "504170551315",
  appId: "1:504170551315:web:6cfb555bced717a42647e6",
  measurementId: "G-VS8E27JYRZ",
};

const database = firebase.initializeApp(firebaseConfig).firestore();
const storageRef = firebase.storage().ref();

// -----------------
// Todo List Section
// -----------------
// const todolistCollection = database.collection("todolist");

// const createTodoList = (todoTask) => {
//   todolistCollection.add({
//     task: todoTask,
//   });
// };

// const updateTodoList = (todoId, todoTask) => {
//   todolistCollection.doc(todoId).update({
//     task: todoTask,
//   });
// };

// const deleteTodoList = (todoId) => {
//   todolistCollection.doc(todoId).delete();
// };

// ------------------------
// Customer Records Section
// ------------------------
// const customerRecordsCollection = database.collection("customer-records");

// const createCustomerRecord = (recordObj) => {
//   customerRecordsCollection.add({
//     name: recordObj.name,
//     email: recordObj.email,
//     phone_number: recordObj.phone_number,
//     image_url: recordObj.image_url
//   });
// };

// const updateCustomerRecord = (customerId, recordObj) => {
//   customerRecordsCollection.doc(customerId).update({
//     name: recordObj.name,
//     email: recordObj.email,
//     phone_number: recordObj.phone_number,
//     image_url: recordObj.image_url
//   });
// };

// const deleteCustomerRecord = (customerId) => {
//   customerRecordsCollection.doc(customerId).delete();
// };
// -----------------
// -----------------

export {
  database,
  storageRef,
  //   createTodoList,
  //   updateTodoList,
  //   deleteTodoList,
  //   createCustomerRecord,
  //   updateCustomerRecord,
  //   deleteCustomerRecord,
};
