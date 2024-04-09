const edit=document.querySelectorAll(".edit");
const deletebutton=document.querySelectorAll(".delete");
function auth(event) {
   // event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "admin@gmail.com" && password === "user") {
         window.location.replace("Admin.html");
    } else {
        alert("Incorrect Password or username Try again...");
        return;
    }
}
function reset(){
    alert("If you want to reset your password contact to admin..");
}
edit.forEach(editbutton=>{
    editbutton.addEventListener("click",function editbtn(){
    alert("do want to add some another name instead of this..");
    }
    );
});
    
deletebutton.forEach(dlt=>{
    dlt.addEventListener("click",function dltbtn(){
        var confirmation=confirm("Are you sure you want to delete this item?");
        if(confirmation){
            
            var item=document.querySelector("#item1");
          
            if(item){
                item.remove();  
                
                alert("Item deleted successfully");
            }
            else{
                alert("Item not found");
            }
        }
    });
});
    

function teacherinfo(){
    window.location.href="teacherInformation.html";
}
document.querySelector(".addstudent").addEventListener("click",()=>{
     window.location.href="studentinformation.html";
});

function auth2(event) {
    // event.preventDefault();
 
     var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
 
     if (email === "user@gmail.com" && password === "user") {
          window.location.replace("StudentDetails.html");
     } else {
         alert("Incorrect Password or username Try again...");
         return;
     }
 }

 let a=document.querySelector("#present");
 
      a.innerText="your attendance is 75%";
