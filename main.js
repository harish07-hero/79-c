var array_name = [];
function submit() {
    var name1 = document.getElementById("stud1").value;
    var name2 = document.getElementById("stud2").value;
    var name3 = document.getElementById("stud3").value;
    var name4 = document.getElementById("stud4").value;
    array_name.push(name1);
    array_name.push(name2);
    array_name.push(name3);
    array_name.push(name4);
    console.log(array_name);
    document.getElementById("display_name").innerHTML=array_name;
    document.getElementById("submit").style.display="none";
    document.getElementById("Sort").style.display="inline-block";
}
function sorting(){
    array_name.sort();
    console.log(array_name);
    document.getElementById("display_name").innerHTML=array_name;
}
