window.onload = function(){
    var btn = document.getElementById("btnaDD");
    btn.onclick = AddToDo;
}
function AddToDo(){
    var myinput = document.getElementById("myinput").value;
    var todos = document.getElementById("todos");
    var newtextnode =document.createTextNode(myinput);
    var newli = document.createElement("li");
    newli.appendChild(newtextnode);
    todos.appendChild(newli);
}
function handleDelete(e){
    var tag= e.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);
}