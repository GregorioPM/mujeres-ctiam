firebase.initializeApp({
    apiKey: "AIzaSyCCJcCqN0ulkZcIIH9MJeYC6s5mwsflzno",
    authDomain: "storage-api-824e6.firebaseapp.com",
    databaseURL: "https://storage-api-824e6.firebaseio.com",
    projectId: "storage-api-824e6",
    storageBucket: "storage-api-824e6.appspot.com",
    messagingSenderId: "323622575428",
    appId: "1:323622575428:web:9fa0acdbda414d53b34b11",
    measurementId: "G-6H8RVM7WG8",
});

console.log("todo ok manuel");

function uploadImage(file) {
    const ref = firebase.storage().ref(`/images/${file.name}`);
    const task = ref.put(file);
    return task;
}
