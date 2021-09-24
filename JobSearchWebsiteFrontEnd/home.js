function getid(num){
    if(num==1){
        var id1=document.getElementById("name1").innerHTML;
        var id2=document.getElementById("email1").innerHTML;
        var id3=document.getElementById("introduction1").innerHTML;
    }
    if(num==2){
        var id1=document.getElementById("name2").innerHTML;
        var id2=document.getElementById("email2").innerHTML;
        var id3=document.getElementById("introduction2").innerHTML;
    }
    if(num==3){
        var id1=document.getElementById("name3").innerHTML;
        var id2=document.getElementById("email3").innerHTML;
        var id3=document.getElementById("introduction3").innerHTML;
    }
    localStorage.setItem("hr_name",id1);
    localStorage.setItem("hr_email",id2);
    localStorage.setItem("hr_introduction",id3);
}