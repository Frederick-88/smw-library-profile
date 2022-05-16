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

// ------------------
// Facilities Section
// ------------------
const facilitiesCollection = database.collection("library-facilities");

const fbCreateFacility = (data) => {
  facilitiesCollection.add({
    title: data.title,
    description: data.description,
    image_thumbnail: data.image_thumbnail,
    images: data.images,
  });
};

const fbUpdateFacility = (facilityId, data) => {
  facilitiesCollection.doc(facilityId).update({
    title: data.title,
    description: data.description,
    image_thumbnail: data.image_thumbnail,
    images: data.images,
  });
};

const fbDeleteFacility = (facilityId) => {
  facilitiesCollection.doc(facilityId).delete();
};

// ------------------------
// Library Programs Section
// ------------------------
const libraryProgramsCollection = database.collection("library-programs");

const fbCreateProgram = (data) => {
  libraryProgramsCollection.add({
    title: data.title,
    description: data.description,
    date: data.date,
    image_thumbnail: data.image_thumbnail,
    images: data.images,
  });
};

const fbUpdateProgram = (programId, data) => {
  libraryProgramsCollection.doc(programId).update({
    title: data.title,
    description: data.description,
    date: data.date,
    image_thumbnail: data.image_thumbnail,
    images: data.images,
  });
};

const fbDeleteProgram = (programId) => {
  libraryProgramsCollection.doc(programId).delete();
};

// ------------------------
// Book Collections Section
// ------------------------
const bookCollection = database.collection("library-book-collections");

const fbCreateBookCollection = (data) => {
  bookCollection.add({
    image_thumbnail: data.image_thumbnail,
    title: data.title,
  });
};

const fbUpdateBookCollection = (bookCollectionId, data) => {
  bookCollection.doc(bookCollectionId).update({
    image_thumbnail: data.image_thumbnail,
    title: data.title,
  });
};

const fbDeleteBookCollection = (bookCollectionId) => {
  bookCollection.doc(bookCollectionId).delete();
};

// ----------------
// Partners Section
// ----------------
const partnersCollection = database.collection("library-partners");

const fbCreatePartner = (data) => {
  partnersCollection.add({
    logo_url: data.logo_url,
  });
};

// const fbUpdatePartner = (partnerId, data) => {
//   partnersCollection.doc(partnerId).update({
//     logo_url: data.logo_url,
//   });
// };

const fbDeletePartner = (partnerId) => {
  partnersCollection.doc(partnerId).delete();
};

// -----------------------
// Library Details Section
// -----------------------
const libraryDetailsCollection = database.collection("library-details");

// const fbCreateLibraryDetail = (data) => {
//   libraryDetailsCollection.add({
//     organization_image: data.organization_image,
//     contact_details: {
//       whatsapp_number: data.whatsapp_number,
//       email: data.email,
//       phone_number: data.phone_number,
//     },
//   });
// };

const fbUpdateLibraryDetail = (libraryDetailId, data) => {
  libraryDetailsCollection.doc(libraryDetailId).update({
    organization_image: data.organization_image,
    feedback_link: data.feedback_link,
    contact_details: {
      whatsapp_number: data.contact_details.whatsapp_number,
      email: data.contact_details.email,
      phone_number: data.contact_details.phone_number,
    },
  });
};

// const fbDeleteLibraryDetail = (libraryDetailId) => {
//   libraryDetailsCollection.doc(libraryDetailId).delete();
// };

export {
  database,
  storageRef,
  fbCreateFacility,
  fbUpdateFacility,
  fbDeleteFacility,
  fbCreateProgram,
  fbUpdateProgram,
  fbDeleteProgram,
  fbCreateBookCollection,
  fbUpdateBookCollection,
  fbDeleteBookCollection,
  fbCreatePartner,
  // fbUpdatePartner,
  fbDeletePartner,
  // fbCreateLibraryDetail,
  fbUpdateLibraryDetail,
  // fbDeleteLibraryDetail,
};
