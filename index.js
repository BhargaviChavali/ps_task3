const prompt =require("prompt-sync")();
// 1 : Write a program to print the factorial of every digit in the number, do not consider a digit if it is repeated.
// input: 335645
// output: 6 120 720 24 

// code : 

let num=prompt("enter a number : ");
s="";
let str="";
for(j=0;j<num.length;j++)
{
    if (str.indexOf(num[j]) === -1){
        str +=num[j];
    }
}
// console.log(str);
for(n of str)
if(n)
{
    fact=1;
    for(i=1;i<=n;i++)
    {
        fact=fact*Number(i);
    }
    s=s+fact+" ";
}
console.log(s);

// 2 : Write a program to print the factorial of a number in the below format.
// input: 5                            
// output: 1*2*3*4*5=120
// input:3
// 1*2*3=6

// code : 

let num1=+prompt("enter a number : ");
let fact1=1;
let s1="";
for(i=1;i<=num1;i++)
{    s1 +=i+"*";
     
    fact1=fact1*Number(i);
}
console.log(`${s1}=${fact1}`);

// 3 : Write a program to print the sum of prime numbers in the fibonacci series.
// input: 10
// output: 23 (0 1 1 2 3 5 8 13 21 34)

// code : 

let num2=prompt("enter a number : ");
let n1=0;
let n2=1;
let s2="";
i=1;
while(i<=num2)
{
    s2=s2+n1+" ";
    n3=n1+n2;
    n1=n2;
    n2=n3;
    i++;
}
console.log(s2);
let arr;
arr=s2.split(" "); 
// console.log(arr);
let sum=0;
for(n of arr)
{
    if(n>1){
        count=0;
    for(let i=2;i<n;i++){
       if(n%i==0){
       count=count+1;
       break;
       }}
  if(count==0)
  sum=sum+Number(n);
}
}
console.log(sum);

// 4 :  Write a program to find the nearest prime to the given number.
// input: 5
// Null
// input: 10
// 11

// code : 

let num3=+prompt("enter a number : ");
let temp1=num3;
let temp2=num3;
let c3=0;
while(true)
{
 temp1=++temp1
 let c3=0;
 for(i=2;i<temp1;i++){
 if(temp1%i==0)
 {
 c3=c3+1;
 break;
}}
if(c3==0)
break
}
// console.log(temp1);
let np1=0;
np1=temp1-num3;
// console.log(np1);
while(true)
{
c3=0;
 temp2=--temp2
 for(i=2;i<temp2;i++){
 if(temp2%i==0)
 {
 c3=c3+1;
 break;
}}
if(c3==0)
break
}
// console.log(temp2);
let np2=0;
np2=num3-temp2;
// console.log(np2);
(np1==np2)?console.log(null):(np1>np2)?console.log(`nearest prime number of ${num3} is ${temp2}`):console.log(`nearest prime number of ${num3} is ${temp1}`);

