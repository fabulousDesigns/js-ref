// ==========================
// 1. EQUALITY OPERATOR
// ==========================
// Loose Equality Operator (== OR !=) performs the 
// automatic type conversion before comparison if 
// needed.
const firstValue = 10
const myArr = [100];
console.log(firstValue == 20)
console.log([100] == 100)
// ==========================
// 2. STRICT COMPARISON OPERATOR
// ==========================
// checks the type and value
// returns trus for identical values
const secondValue = 10
const mySecondArr = [100];
console.log(secondValue == 20)
console.log([100] == 100)
// ==========================
// 3. ASSIGNMENT OPERATOR
// ==========================
const myName = "Huncho"
console.log(myName)
// ==========================
// 4. IN operator
// ==========================
// The in operator returns the boolean value true/false.
// The in operator returns true if a property exists in the 
// object or its prototype chain.
const car = {
    model: 'Buggati',
    color: 'silver',
    price: 678987654
}
const isModel = 'model' in car
const isError = 'speed' in car
console.log(car)
console.log(isModel)
console.log(isError)
// ==========================
// 5. SPREAD OPERATOR
// ==========================
// add salary property to employee object
const includeSalary = true
const Employee = {
    firstName: 'Bernard',
    lastName: 'Ncho',
    department: 'IT' 
}
console.log(Employee)
if(includeSalary){
    Employee.salary = 60000
}
console.log(Employee)

