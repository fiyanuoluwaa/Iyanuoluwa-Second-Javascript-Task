const num1=parseInt (prompt("Enter first number: "))
const num2=parseInt (prompt("Enter second number: "))
const opr=prompt("operator +,-,*,/")

let result;
if (opr=="+")
{
    result=(num1+num2);
}
else if (opr =="-")
{
    result=(num1-num2);
}
else if (opr =="*")
{
    result=(num1*num2);
}
else if (opr =="/")
{
    result=(num1/num2);
}

{
    alert (num1+opr+num2+"="+result);
}