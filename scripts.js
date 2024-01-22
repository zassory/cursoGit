const saludo = () => {
    alert("Hola Alumnos")
}

let btnAlert = document.getElementById("alert");

btnAlert.addEventListener("click", ()=> {
    saludo()
});
