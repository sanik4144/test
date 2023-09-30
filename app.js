function redalert(){

    var fname= document.getElementById("fname").value;
    if(fname==""){
        document.getElementById("fname").style.border="1px solid red";
        document.getElementById("nlname").innerHTML="*required";
        document.getElementById("nlname").style.color="red";
        event.preventDefault();
    }

    var lname= document.getElementById("lname").value;
    if(lname==""){
        document.getElementById("lname").style.border="1px solid red";
        document.getElementById("nlname").innerHTML="*required";
        document.getElementById("nlname").style.color="red";
        event.preventDefault();
    }

    var email = document.getElementById("email").value;
    if(email==""){
        document.getElementById("email").style.border="1px solid red";
        document.getElementById("nemail").innerHTML="*required";
        document.getElementById("nemail").style.color="red";
        event.preventDefault();
    }

    var mono = document.getElementById("mono").value;
    if(mono==""){
        document.getElementById("numcode").style.border="1px solid red";
        document.getElementById("mono").style.border="1px solid red";
        document.getElementById("nmono").innerHTML="*required";
        document.getElementById("nmono").style.color="red";
        event.preventDefault();
    }

    var dob = document.getElementById("dob").value;
    if(dob==""){
        document.getElementById("dob").style.border="1px solid red";
        document.getElementById("ndob").innerHTML="*required";
        document.getElementById("ndob").style.color="red";
        event.preventDefault();
    }

    var country= document.getElementById("country").value;
    if(country==""){
        document.getElementById("country").style.border="1px solid red";
        document.getElementById("ncountry").innerHTML="*required";
        document.getElementById("ncountry").style.color="red";
        event.preventDefault();
    }

    var pass = document.getElementById("pass").value;
    if(pass==""){
        document.getElementById("pass").style.border="1px solid red";
        document.getElementById("npass").innerHTML="*required";
        document.getElementById("npass").style.color="red";
        event.preventDefault();
    }
    else if(pass.length<8){
        document.getElementById("npass").innerHTML="Required minimum 8 characters";
        document.getElementById("npass").style.color="red"; 
        event.preventDefault();   
    }
    else{
        var ucnt=0, lcnt=0, ncnt=0, scnt=0;

        for(var i=0; i<pass.length; i++){
            if(pass[i]>="A" && pass[i]<="Z") ucnt++;
            else if(pass[i]>="a" && pass[i]<="z") lcnt++;
            else if(pass[i]>=0 && pass[i]<=9) ncnt++;
            else scnt++;
        }

        if(ucnt==pass.length){
            document.getElementById("npass").innerHTML="Required minimum 1 small letter character";
            document.getElementById("npass").style.color="red";
            event.preventDefault();
        }
        if(ucnt==0){
            document.getElementById("npass").innerHTML="Required minimum 1 capital letter character";
            document.getElementById("npass").style.color="red";
            event.preventDefault();
        }
        if(lcnt==pass.length){
            document.getElementById("npass").innerHTML="Required minimum 1 capital letter character";
            document.getElementById("npass").style.color="red";
            event.preventDefault();
        }
        if(lcnt==0){
            document.getElementById("npass").innerHTML="Required minimum 1 small letter character";
            document.getElementById("npass").style.color="red";
            event.preventDefault();
        }
        if(ncnt==pass.length){
            document.getElementById("npass").innerHTML="Required minimum 1 letter & 1 special character";
            document.getElementById("npass").style.color="red";
            event.preventDefault();
        }
        if(ncnt==0){
            document.getElementById("npass").innerHTML="Required minimum 1 number character";
            document.getElementById("npass").style.color="red";
            event.preventDefault();
        }
        if(scnt==0){
            document.getElementById("npass").innerHTML="Required minimum 1 special character";
            document.getElementById("npass").style.color="red";
            event.preventDefault();
        }
    }


    var repass = document.getElementById("repass").value;
    if(repass==""){
        document.getElementById("repass").style.border="1px solid red";
        document.getElementById("nrepass").innerHTML="*required";
        document.getElementById("nrepass").style.color="red";
        event.preventDefault();
    }
    else if(pass.length==repass.length){
        var wrn=0;
        for(var i=0; i<pass.length; i++){
            if(pass[i]!=repass[i]){
                wrn++;
            }
        }

        if(wrn>0){
            document.getElementById("repass").style.border="1px solid red";
            document.getElementById("nrepass").innerHTML="Password doesn't match";
            document.getElementById("nrepass").style.color="red";
            event.preventDefault();
        }
    }
    else{
        document.getElementById("repass").style.border="1px solid red";
        document.getElementById("nrepass").innerHTML="Password doesn't match";
        document.getElementById("nrepass").style.color="red";
        event.preventDefault();
    }

    var agreement = document.getElementById("agreement");
    if(agreement.checked==false){
        document.getElementById("agreement").style.border="1px solid red";
        document.getElementById("nagreement").innerHTML="*required";
        document.getElementById("nagreement").style.color="red";
        event.preventDefault(); 
    }
}