function tijiao(){  
   
  var hr_email=document.getElementById("hr_email").innerHTML;
  var resume_context=document.getElementById("xwgs").value;
  

  var xmlhttp=new XMLHttpRequest();
      xmlhttp.onreadystatechange=function()
    {

              var json_xmlhttp=JSON.parse(xmlhttp.responseText);
              alert(json_xmlhttp.msg);                                    
              window.location.href='home.html';
    }
      xmlhttp.open("POST","http://localhost:8080/api/resume/releaseresume",true);
      xmlhttp.setRequestHeader("token",localStorage.getItem("token"));
      xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      xmlhttp.send("hr_email="+hr_email+"&resume_context="+resume_context);
      
    
} 