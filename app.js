//Person Constructor
function Person(name,dob){
    this.name=name;
    // this.age=age;
    this.birthday=new Date(dob);
    this.calculateAge=function(){
        const diff=Date.now()-this.birthday.getTime();
        return new Date(diff).getUTCFullYear()-1970;//Time are calculated from 1jan1970
    };
};

const brad=new Person('Brad','9-10-1981');

console.log(brad);
console.log(brad.calculateAge());


// const brad=new Person('Brad','9-10-1981');//mmddyyy

// console.log(brad);

// var time=new Date('7-25-1994');
// console.log(time);
// var calculate=time.getTime();
// console.log(calculate);
// console.log(new Date(calculate));
// var now=Date.now();
// console.log(now);
// var diff=now-calculate;
// var date=new Date(diff);
// console.log(date.getUTCFullYear()-1970);
