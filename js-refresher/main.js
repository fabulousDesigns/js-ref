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
// Array
const numbersOne = [1,2,3]
console.log(numbersOne)
const numbersTwo = [4,5,6]
console.log(numbersTwo)
const combinedArr = [...numbersOne, ...numbersTwo] 
console.log(combinedArr)
// destructure arr
const [x,y, ...rest] = combinedArr
console.log(x)
console.log(y)
console.log(...rest)
// OBJECTS
// add salary property to employee object
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  console.log(myVehicle)
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  console.log(updateMyVehicle)
const updatedVehicle  = {...myVehicle, ...updateMyVehicle}
console.log(updatedVehicle)

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
const salary = 40000
const newEmployee = {salary, ...Employee}
console.log(newEmployee)


const isLoggedIn = true

const User = {
  username : 'Huncho',
  password : 1234567,
  ...(isLoggedIn && {email: 'hazardmburu10@gmail.com'})
}

console.log(User)
// ==========================
// 6. REST OPERATOR
// ==========================

const findSum = (...args)=>{
 console.log(args)
}

findSum(5,6,7)