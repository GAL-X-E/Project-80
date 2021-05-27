name_of_the_student_array=[];
function submit(){
    var name_1 = document.getElementById("name_of_the_guest").value;
    name_of_the_student_array.push(name_1);
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML = name_of_the_student_array;
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display_name_sort").innerHTML = name_of_the_student_array;
}

function show(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    for(var i=0;i<name_of_the_student_array.length;i++){
        htmldata=htmldata+'<li>' + name_of_the_student_array[i] + '</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_name_show").innerHTML = htmldata;
}

function searching(){
    var s= document.getElementById("search_button").value;
    var found=0;
    var j;
    for(j=0; j<name_of_the_student_array.length; j++){
        if(s==name_of_the_student_array[j]){
            found=found+1;
        }
    }
    document.getElementById("display_name_search").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}