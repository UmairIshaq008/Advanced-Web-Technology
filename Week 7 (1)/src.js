console.log("Starting");
function handlebindings(){
    console.log("handing bindings");
}
function doBindings(){
    console.log("Do Bindings");
    var btn = document.getElementById("btnADD");
    btn.onclick = handlebindings;
}
window.onload = doBindings;
console.log("Finished");
