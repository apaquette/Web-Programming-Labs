function checkValue(){
    document.getElementById("message").innerHTML="";
    var num = parseInt(document.getElementById("num").value);
    var msg = "";
    if(num%2==0){
      num=0;
    }
    else{
      num=1;
    }
    switch(num){
      case 0:
        msg = "The number is Even";
        break;
      case 1:
        msg = "The number is Odd";
        break;
    }
    for (var i=0; i<5; i++){
      document.getElementById("message").innerHTML+=msg+"<br>";
    }
  }