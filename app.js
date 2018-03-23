//BUILT IN CONSTRUCTOR 

//Strings
const name1='jeff';//create as a primitive type
const name2= new String('jeff');//create as an object by calling constructor function

//name2.foo='bar';//can add property to it

console.log(typeof name1);//String
console.log(typeof name2);//object

//Conditional on primitive type
// if(name1==='jeff'){
//     console.log('Yes');         // Yes
// }else{
//     console.log('No');
// };

//Conditional on string object
if(name2==='jeff'){
    console.log('Yes');         // No --- bcz type is not same
}else{
    console.log('No');
};


//Number
const num1=5;//As primitive type
const num2=new Number(5);//as object by calling constructor function

//Boolean
const bool1=true;
const bool2= new Boolean(false);

//Functions
const getSum1=function(x,y){
    return x+y;
};
const getSum2=new Function('x','y','return x+y');//constructor

//Object
const john1={
    name:'John1'
};
const john2=new Object({name:'John2'});

//Arrays
const arr1=[1,2,3,4,5];
const arr2=new Array(1,2,3,4,5,6);

//Regular Expressions
const re1=/\w+/;
const re2=new RegExp('\\w+');



























