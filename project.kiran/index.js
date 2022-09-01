function Validate() 
{
    if(document.myform.email.value==""){
        alert("please provide your email id");
        document.myform.email.focus()
        return false
    }
    else if(document.myform.psw.value==""){
alert("please provide your password");
    document.myform.email.focus()
    return false
    }
else{
    return true
 }
}

