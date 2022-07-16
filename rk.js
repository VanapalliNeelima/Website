function validation(){
    fullname();
  if(fname() && mname() && lname() && mail() && checkpassword() && address() && phonenb() && hobbies()){
    return true;
  }
  else{
    return false;
  }
}
function fname(){
    var f=document.getElementById("f").value;
    var r=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var r1=/[0-9]/;
    if(f.length<3)
    {
        document.getElementById("f").style.border="5px solid red";
        document.getElementById("ferror").innerHTML="*Enter more than three characters";
        document.getElementById("ferror").style.visibility="visible";
        return false;
    }
    if(r.test(f))
    {
        document.getElementById("f").style.border="5px solid red";
        document.getElementById("ferror").innerHTML="*It contains special characters";
        document.getElementById("ferror").style.visibility="visible";
        return false;
    }
    if(r1.test(f))
    {
        document.getElementById("f").style.border="5px solid red";
        document.getElementById("ferror").innerHTML="*It contains digits";
        document.getElementById("ferror").style.visibility="visible";
        return false;
    }
   
    return true;
}
function mname(){
    var m=document.getElementById("m").value;
    var r2=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var r3=/[0-9]/;
    if(r2.test(m))
    {
        document.getElementById("m").style.border="5px solid red";
        document.getElementById("merror").innerHTML="*It contains special characters";
        document.getElementById("merror").style.visibility="visible";
        return false;
    }
    if(r3.test(m))
    {
        document.getElementById("m").style.border="5px solid red";
        document.getElementById("merror").innerHTML="*It contains digits";
        document.getElementById("merror").style.visibility="visible";
        return false;
    }
   
    return true;
}
function lname(){
    var l=document.getElementById("l").value;
    var r4=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;;
    var r5=/[0-9]/;
    if(l.length<3)
    {
        document.getElementById("l").style.border="5px solid red";
        document.getElementById("lerror").innerHTML="*Enter more than three characters";
        document.getElementById("lerror").style.visibility="visible";
        return false;
    }
    if(r4.test(l))
    {
        document.getElementById("l").style.border="5px solid red";
        document.getElementById("lerror").innerHTML="*It contains special characters";
        document.getElementById("lerror").style.visibility="visible";
        return false;
    }
    if(r5.test(l))
    {
        document.getElementById("l").style.border="5px solid red";
        document.getElementById("lerror").innerHTML="*It contains digits";
        document.getElementById("lerror").style.visibility="visible";
        return false;
    }
   
    return true;
}
function fullname(){
    var k=document.getElementById("f").value;
    var l=document.getElementById("l").value;
    var m=k+l;
    document.getElementById("full").value=m;
}
function mail(){
    var e=/^[a-z,A-Z,0-9][0-9,A-Z,a-z,-,.]*@[a-z]{3,6}\.[a-z]{2,3}(\.)?([a-z])?([a-z])?$/;
    var gmail=document.getElementById("mail").value;
    if(gmail.length==0)
    {
        document.getElementById("mailerror").style.visibility="visible";
       document.getElementById(" mail").style.color="red";
        document.getElementById("mailerror").innerHTML="please enter mail";
        return false;
    }
    if(e.test(gmail)){
        document.getElementById("mailerror").style.visibility="visible";
        document.getElementById(" mail").style.color="green";
        document.getElementById("mailerror").innerHTML="valid";
        return true;
    }
    else{
        document.getElementById("mailerror").style.visibility="visible";
        document.getElementById(" mail").style.color="red";
        document.getElementById("mailerror").innerHTML="Invalid";
        return false;
    }

}
function phonenb(){
        var u=document.getElementById("usa").checked;
        var i=document.getElementById("ind").checked;
        var pn=document.getElementById("phn").value;
        var pnerror=document.getElementById("pnerror");
        var ns=document.getElementById("ns");
        var up=/\d{3}-\d{3}-\d{4}/;
        var ip=/^[6-9]\d{9}$/;
        if(pn.length==0){
            pnerror.style.visibility="visible";
            pnerror.style.color="red";
            pnerror.innerHTML="Please enter phone number.";
            return false;
    
        }
        if(i){
            if(ip.test(pn)==false)
            {
                pnerror.style.visibility="visible";
                pnerror.style.color="red";
                pnerror.innerHTML="Invalid";
                return false;
            }
            else{
                pnerror.style.visibility="visible";
                pnerror.style.color="green";
                pnerror.innerHTML="valid";
                return true;
    
            }
        }
        else if(u){
            if(up.test(pn)==false)
            {
                pnerror.style.visibility="visible";
                pnerror.style.color="red";
                pnerror.innerHTML="Invalid";
                return false;
            }
            else{
                pnerror.style.visibility="visible";
                pnerror.style.color="green";
                pnerror.innerHTML="valid";
                return true;
    
            }
        }
}
function hobbies(){
    var herror=document.getElementById("herror");
    var h1=document.getElementById("h1").checked;
    var h2=document.getElementById("h2").checked;
    var h3=document.getElementById("h3").checked;
    var e=[h1,h2,h3];
    var count=0;
    for(let i=0;i<e.length;i++)
    {
        if(e[i]==true)
        {
            count=count+1;
        }
    }
    if(count<2){
        herror.style.visibility="visible";
        herror.style.color="red";
        herror.innerHTML="  Please select at lease 2 hobbies";
        return false;
    }
    herror.style.visibility="visible";
    herror.innerHTML="";
    return true;
}
function checkpassword(){
    var p=document.getElementById("pass").value;
    var q=document.getElementById("passwd").value;
    if(p==""){
        document.getElementById("pass").style.border="5px solid red";
        document.getElementById("passerror").innerHTML="*please fill password";
        document.getElementById("passerror").style.visibility="visible";
        return false;
    }
    if(p.length<6){
        document.getElementById("pass").style.border="5px solid red";
        document.getElementById("passerror").innerHTML="*PASSWORD length should be greater than 6";
        document.getElementById("passerror").style.visibility="visible";
        return false;
    }
    if(p!=q){
        document.getElementById("passerror").innerHTML="*passwords are not same";
        return false;
    }
    return true;
}
function sp(){
    var a=document.getElementById("pass").value;
    if(a){
        document.getElementById("pass").type="text";
    }
    else{
        document.getElementById("pass").type="password";
    }
}
function address(){
    var l=document.getElementById("dig").value;
    n=/^[0-9]$/;
    if(n.test(l)){
            document.getElementById("dig").style.border="5px solid red";
            document.getElementById("addressrror").innerHTML="*Digits are not allowed";
            document.getElementById("addresserror").style.visibility="visible";
            return false;
    }
    return true;
}
/*function confirm(){
    var k=document.getElementById("c").Checked;
    if(k){
        document.getElementById("sub").style.opacity=0.0;
        return true;
    }
}*/
/*function nl(){
    alert("Are you want to sure to RESET?");
}*/
function st(){
    alert("Do you want to submit");
    return true;
}