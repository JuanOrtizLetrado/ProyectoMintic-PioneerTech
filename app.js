const firebaseConfig = {
    apiKey: "AIzaSyBo1wTMZd9ziCmUCu6CkvZPIuKDc0dH0yQ",
    authDomain: "pioneertech-5357d.firebaseapp.com",
    projectId: "pioneertech-5357d",
    storageBucket: "pioneertech-5357d.appspot.com",
    messagingSenderId: "742414608313",
    appId: "1:742414608313:web:c17498f0c7a81403fa7868",
    measurementId: "G-1DMWCXRXR9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   Declarando variables globales
const auth = firebase.auth()
const proveedor = new firebase.auth.GoogleAuthProvider()
const database = firebase.firestore()
let usuarioActual;
let Productos = []

// Variables DOM
const btnLogin = document.getElementById('button-login')
const btnLogOut = document.getElementById('button-logout')
const formulario = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const contendorTarea =  document.getElementById('todos-container')

console.log(input);

async function login(){
    try {
        const respuesta =  await auth.signInWithPopup(proveedor)
        console.log(respuesta.user.displayName);
        usuarioActual = respuesta.user

        Productos = await leerTareas()

        pintarBrowser(Productos)

    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

function logOut(){
    auth.signOut();
}

async function adicionarTarea(texto){
    const tarea = {
        id:uuid.v4(), 
        tarea : texto,
        completada : false,
        user: usuarioActual.displayName
    }
    const respuesta = await guardarTarea(tarea)
    console.log(respuesta);
    input.value = ''
    // console.log(database.collection('lista-tareas').add(tarea))
    Productos = await leerTareas()
        pintarBrowser(Productos)
}

function pintarBrowser(tareas){
    // contendorTarea
    let contenidoHtml = "";
    tareas.forEach((t)=>{
        contenidoHtml += `
        <li>${t.tarea}</li>
        `
    })
    contendorTarea.innerHTML = contenidoHtml
}

// Base de datos
async function guardarTarea(task){
    try{
       const respuesta = await database.collection('Productos').add(task)
       return respuesta
    }catch(error){
        console.error(error)
        throw new Error(error)
    }
}

async function leerTareas(){
    const tareas = []
    const respuesta = await database.collection('Productos').get()
    respuesta.forEach(function(item){
        // console.log(item.data());
        tareas.push(item.data())
    })
    return tareas
}

// Eventos
// Login
btnLogin.addEventListener('click', (e)=>{
    login()
    // console.dir(btnLogin);
    btnLogin.classList.add('hidden')
    btnLogOut.classList.remove('hidden')
    formulario.classList.remove('hidden')

})
// Logout
btnLogOut.addEventListener('click', (e)=>{
    logOut()
    btnLogin.classList.remove('hidden')
    btnLogOut.classList.add('hidden')
    formulario.classList.add('hidden')
    contendorTarea.classList.remove('clean')
})

// formulario
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(input.value);
    const texto = input.value
    if(texto !== ""){
        adicionarTarea(texto)
    }
})