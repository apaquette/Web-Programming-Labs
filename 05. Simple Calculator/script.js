function addTheNumbers(){//addition
    var number1=document.getElementById("addNumber1").value;
    var number2=document.getElementById("addNumber2").value;
    var sum = parseInt(number1) + parseInt(number2);
    document.getElementById("sum").value=sum;
  }

  function subTheNumbers(){//subtraction
    var number1=document.getElementById("subNumber1").value;
    var number2=document.getElementById("subNumber2").value;
    var difference = parseInt(number1) - parseInt(number2);
    document.getElementById("difference").value=difference;
  }

  function multTheNumbers(){//multiplication
    var number1=document.getElementById("multNumber1").value;
    var number2=document.getElementById("multNumber2").value;
    var product = parseInt(number1) * parseInt(number2);
    document.getElementById("product").value=product;
  }

  function divTheNumbers(){//division
    var number1=document.getElementById("divNumber1").value;
    var number2=document.getElementById("divNumber2").value;
    var quotient = parseInt(number1) / parseInt(number2);
    document.getElementById("quotient").value=quotient;
  }