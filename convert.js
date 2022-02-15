function calcRoman() {
    const input = document.getElementById("arabicNumber");
    const value = input.value;
  
    const romanNumber = convertToRoman(value);
  
    textarea.innerText = romanNumber;
    return romanNumber;

};





function startWith4(num){
    if(num==4 || num>=40 && num<=49 || num>=400 && num<=499 || num>=4000 && num<=4999){
    return true;
    }
 
    else{
        return false;
    }
}

function startWith9(num){
   
    if(num==9 || num>=90 && num<=99 || num>=900 && num<=999 || num>=9000 && num<=9999){
        return true;
    }
    else{
        return false;
    }
}


function convertToRoman(num)
{

  var roman = "";

  var div1000 = num / 1000;
  var rest1000 = num % 1000;
  var intForRomanM = Math.trunc(div1000);
  
  
    for (var i = 0; i < intForRomanM; i++)
    {
        roman += "M";
    }
  
    if(rest1000>=900 && rest1000<=999){
      roman = roman + "CM";
      rest1000 = rest1000 - 900;
  }
  
   
    if(rest1000>=400 && rest1000<=499){
      roman = roman + "CD";
      rest1000 = rest1000 - 400;
    }
   
      
  
  
  
    
    

  var div500 = rest1000 / 500;
  var rest500 = rest1000 % 500;
  var intForRomanD = Math.trunc(div500);

    

      for (var j = 0; j < intForRomanD; j++)
	{
	  roman += "D";
	}
	
	
  
 
    

  var div100 = rest500 / 100;
  var rest100 = rest500 % 100;
  var intForRomanC = Math.trunc(div100);


      for (var k = 0; k < intForRomanC; k++)
	{
	  roman += "C";
	}
	
	if(rest100>=90 && rest100<=99){
      roman = roman + "XC";
      rest100 = rest100 - 90;
  }
  
   
    if(rest100>=40 && rest100<=49){
      roman = roman + "XL";
      rest100 = rest100 - 40;
    }
    

  var div50 = rest100 / 50;
  var rest50 = rest100 % 50;
  var intForRomanL = Math.trunc(div50);



      for (var l = 0; l < intForRomanL; l++)
	{
	  roman += "L";
	}
    

  var div10 = rest50 / 10;
  var rest10 = rest50 % 10;
  var intForRomanX = Math.trunc(div10);
  
      for (var m = 0; m < intForRomanX; m++)
	{
	  roman += "X";
	}
    

    if(rest10==9){
      roman = roman + "IX";
      rest10 = rest10 - 9;
  }
  
   
    if(rest10==4){
      roman = roman + "IV";
      rest10 = rest10 - 4;
    }


  

  var div5 = rest10 / 5;
  var rest5 = rest10 % 5;
  var intForRomanV = Math.trunc(div5);


  

      for (var n = 0; n < intForRomanV; n++)
	{
	  roman += "V";
	}
    
    

  var div1 = rest5 / 1;
  var rest1 = rest5 % 1;
  var intForRomanI = Math.trunc(div1);


    
      for (var o = 0; o < intForRomanI; o++)
	{

	  roman += "I";
	}
    
    


  return roman;
}