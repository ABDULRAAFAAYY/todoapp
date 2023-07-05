// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase,ref,set,push,onValue,remove,update  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUJA_31wq44XpPKnZOIOL0xTdpR7C1iWg",
  authDomain: "todoapp-d17c4.firebaseapp.com",
  projectId: "todoapp-d17c4",
  storageBucket: "todoapp-d17c4.appspot.com",
  messagingSenderId: "537566517353",
  appId: "1:537566517353:web:35ac063733abffe5c06af8",
  measurementId: "G-K5J3QTE5TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
  const auth = getAuth(app)

export {
    app ,database,ref,set,push,onValue,remove,update,auth,createUserWithEmailAndPassword,
}
  
  
  
  // LI UL FUNCTION
//   window.AddTask = function (){
// var obj = {
//     todo: document.getElementById('input').value
// }
// console.log(obj);
// var userRef = push(ref(database , 'todos/'))

// obj.id = userRef.key

// set(userRef , obj)
//     }

//     // GET DATA2

//     window.get = function(){
//         var listData = document.getElementById('List')

//         onValue(ref(database , 'todos/'),function(todo){
//             listData.innerHTML = ""

//             var todos = Object.values(todo.val())
            
//             for(var i = 0; i < todos.length; i++){
//                 var app = todos[i]
//                 console.log(app.todo);
//                 listData.innerHTML += `
//                 <li class = "listing" > TODO : ${app.todo} <button class = "edit-btn"
//                 onclick = "ToDoUpdate('${app.id}' )" > EDIT </button>
                
//                 <button class = "del-btn"
//                 onclick = "Tododel('${app.id}')"  > DELETE</button>
                
//                 </li>`
//             }
//             var inp = document.getElementById('input').value = "";
//         })
//     }
//     get()
    
//     // DELETE DATA WORK
    
//     window.Tododel = function(id){
//     remove(ref(database , `todos/${id}`))
// }

// window.delAll = function (){
//     remove(ref(database , `todos/`))

// }

// window.ToDoUpdate = function(id){
//     var newTodo = prompt("enter your data")

//     update(ref(database , `todos/${id}`),{
//         todo : newTodo
//     })
// }