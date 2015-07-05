function CalcValue()
{
    var p = new Number(document.getElementById("principalLabel").value); //get principal amount
    
    var r = new Number(document.getElementById("interestRatelabel").value); //get interest rate
    
    var n = new Number(document.getElementById("timesComplabel").value); //get times compounded
    
    var t = new Number(document.getElementById("yearsLabel").value); //get years invested
    
    var monthly = new Number(document.getElementById("monthlyLabel").value); //get monthly addition
    
    var pr = p + (monthly * 12); //add monthly addition
    
    // Calculate the future value of the investment
    
   
    var A = (pr) * (Math.pow((1 +((r/n))),(n*t)))
    
    
     document.getElementById("futureValuelabel").innerHTML = "Future Investment Value = " + "$" + A.toFixed(2);  //display the future value in a label
}