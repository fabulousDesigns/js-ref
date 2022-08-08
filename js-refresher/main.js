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
const scores = [10,20,30,40]
console.log(scores)
const newScores = [...scores]
console.log(newScores)
// ==========================
// 6. REST OPERATOR
// ==========================

const findSum = (...args)=>{
 console.log(args)
}

findSum(5,6,7)
const student = {
  sudentName:'wertyui',
  regNo:12345678,
  course:'BCT'
}

console.log(student)
const{regNo, ...newStudent} = student
console.log(newStudent)
newStudent.regNo = 'CT202/100789/19'
console.log(newStudent)



// ==========================
// 7. INCLUDES
// ==========================
const fruits = ['kiwi','dragon fruit','orange','apple']

console.log(fruits)

console.log(fruits.includes('kiwi'))

if(fruits.includes('kiwi')){
  console.log('yes')
}
if(fruits[0].includes('i')){
  console.log("NCHO")
}


const myNameHuncho = 'bernard'
console.log(myNameHuncho)

if(myNameHuncho.includes('r')){
  console.log("Bingo")
}
// ==========================
// 8. SET
// ==========================

const NAMES = new Set()

NAMES.add('Bernard')
NAMES.add('Mburu')

console.log(NAMES)

console.log(typeof(NAMES))
let text = ''
console.log(text)
const LETTERS = new Set()
// add letters
LETTERS.add('a')
LETTERS.add('b')
LETTERS.add('c')
LETTERS.add('d')
LETTERS.add('f')
console.log(LETTERS)

LETTERS.forEach((value)=>{
   text += value
})

console.log(text)
// set with spread operator
const colors = ['red','blue','white','blue','green','yellow','black','yellow']
console.log(colors)
console.log(colors.length)

const uniqueColors = [...new Set(colors)]
console.log(uniqueColors)
console.log(uniqueColors.length)
let color = ''
uniqueColors.forEach((value) =>{
 color += value 
})
console.log(color)

// ==========================
// 9. FOREACH
// ==========================
let sum = 0;
const numbers = [65, 44, 12, 4]
numbers.forEach(myFunction)

function myFunction(item) {
  sum += item
}
console.log(sum)

const NUMBERS = [65, 44, 12, 4]
NUMBERS.forEach(Function)

function Function(item, index, arr) {
  console.log( arr[index] = item * 10)
}
// ==========================
// 10. ARRAY.isArray()
// ==========================
const myFruits = ['kiwi','passion','mango','banana']

console.log(Array.isArray(myFruits))
const myNameMe= 'nnnnnnn'

console.log(Array.isArray(myNameMe))