
function validateform(){
    let x = document.myform.name.value;
    let y = document.myform.mail.value;
    let z = document.myform.phone.value;
    let w = document.myform.pass.value;
    let a = document.myform.passc.value;
    if(x=="" || x==null){
        alert("Name can't be blank");
        document.myform.name.focus();
        return false;
    }
    
    if(y=="" || y==null){
        alert("Email can't be blank");
        document.myform.mail.focus();
        return false;
    }

    if(z.length!=10){
        alert("Invalid Phone Number");
        document.myform.phone.focus();
        return false;
    }
    if(a!=w){
        alert("Check password again");
        return false;

    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(!y)){
      alert("You have entered an invalid email address!");
      return false;

}
    
}

function validatesignin(){
    let z = document.myformsignin.phone.value;

    if(z=="" || z==null){
        alert("Phone number can't be blank");
        document.myformsignin.phone.focus();
        return false;
    }
    
    
    if(z.length!=10){
        alert("Invalid Phone Number");
        return false;
    }
    
    let w = document.myformsignin.pass.value;
    if(pass!='12345'){
        alert("Invalid Password")
    }
    
    if(w=="" || w==null){
        alert("Password can't be blank");
        document.myformsignin.pass.focus();
        return false;
    }
}

