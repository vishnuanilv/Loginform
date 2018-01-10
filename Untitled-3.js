function validation()
   {
     
    var un = document.login.un.value;
    var pw = document.login.pw.value;
    var emvalid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

       
//-----empty field checkin-----//
    if(un ==""||pw =="")
   {
    alert("Fields should no be empty!");
    return;
   }      
       
//-----Success condition & other condition check-----//
     if(un.match(emvalid))
    {
     if(pw.length>'6')
    {
     alert("Login Successful!");
     return;
    }
     else
    {
     alert("Password Should be more than 6 characters! ");   
     return;
    }
    }
     else
    {
     alert("Enter a valid Email or Password!");
     return;
    }

   }
