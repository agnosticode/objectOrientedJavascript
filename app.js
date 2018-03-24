//Object.prototype
//Person.prototype


function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName=lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     return Math.abs(new Date(diff).getUTCFullYear() - 1970);//Time are calculated from 1jan1970
    // };
};

//Calculate age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);//Time are calculated from 1jan1970
};

//get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
};

//Gets married-last name change
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
};



const john = new Person('John','Doe','8-12-1990');
const mary = new Person('Marry','Johnson','March 20 1978');

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());
console.log(mary.hasOwnProperty('firstName'));