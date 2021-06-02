//regex

async function register(){
    const fullname=document.forms["registerForm"]["fullname"].value;
    if(fullname==''){
        alert("Please enter fullname");
        document.getElementById('fullname_alert').innerHTML="Please fill name";
        return false;
    }

    const password=document.forms["registerForm"]["password"].value;
    if(password.length>10 || password<3){
        alert("Please enter password");
        document.getElementById('fullname_alert').innerHTML="Please fill name";
        return false;
    }

    const email=document.forms["registerForm"]["email"].value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(String(email).toLowerCase())==false){
        alert('not valid email');
    }

}