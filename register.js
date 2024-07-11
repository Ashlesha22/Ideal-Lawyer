function validate() {    
    var fname = document.reg_form.fname;    
    var lname = document.reg_form.lname;    
    var address = document.reg_form.address;    
    var gender = document.reg_form.gender;    
    var email = document.reg_form.email;    
    var mobile = document.reg_form.mobile;    
    var age = document.reg_form.age;    

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
    if (address.value.length <= 0) {    
        alert("Please Enter The email Address");    
        address.focus();    
        return false;    
    }    
       
    if (email.value.length <= 0) {    
        alert("Please Enter The Email ID");    
        email.focus();    
        return false;    
    }    
   
    return false;    
}    
    