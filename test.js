var students = ["usman", "Ali", "Noman","umair"];
//let search students = students.findindex(findAli);
//students[5] ="Zeeshan";
students.splice(1,0,...["Zahid","Anwar"]);

console.log(...students);
function findAli(std){
    if(std == "Ali") return true;
    else return false;
}

