function openForm() {
    
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
   
    document.getElementById("myForm").style.display = "none";
  }
 
  function validate()
  {
    let  x=document.forms["myForm"]["userName"].value;
    let  y=document.forms["myForm"]["userMail"].value;
    if(x!="" && y!="")
    {
        window.location.href="report1.html";
    }
   else
   alert("Please enter name and mail Both");
  }