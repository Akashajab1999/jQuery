var students = [{name:"Akash",education:"BE",password:"Akash"},{name:"Pragati",education:"BE",password:"pragati"}]



$(document).ready(function(){

    var name = $("#first").val();
    var password=$("#password").val();
$("#button").click(function(){

    

  if(name==students.name && password==students.password){
     
     alert("Login Successfully");
     console.log(name);

}
else{
   alert("Incorrect username");
}
});
})