function validate() {    
    var fname = document.reg_form.fname;    
    var lname = document.reg_form.lname;       
    var email = document.reg_form.email;    
    var number = document.reg_form.number;        

    if (fname.value.length <= 0) {    
        alert("Please Enter The First Name");    
        fname.focus();    
        return false;    
    }    
    if (lname.value.length <= 0) {    
        alert("Please Enter The Last Name");    
        lname.focus();    
        return false;    
    }    
    if (email.value.length <= 0) {    
        alert("Please Enter The Email ID");    
        email.focus();    
        return false;    
    }    
    if (number.value.length <= 0) {    
        alert("Please Enter The Mobile number");    
        number.focus();    
        return false;    
    }    
    return false;    
}    
    