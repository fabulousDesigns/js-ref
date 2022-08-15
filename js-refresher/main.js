// ==========================
// 1. EQUALITY OPERATOR
// ==========================
// Loose Equality Operator (== OR !=) performs the
// automatic type conversion before comparison if
// needed.
const firstValue = 10;
const myArr = [100];
console.log(firstValue == 20);
console.log([100] == 100);
// ==========================
// 2. STRICT COMPARISON OPERATOR
// ==========================
// checks the type and value
// returns trus for identical values
const secondValue = 10;
const mySecondArr = [100];
console.log(secondValue == 20);
console.log([100] == 100);
// ==========================
// 3. ASSIGNMENT OPERATOR
// ==========================
const myName = "Huncho";
console.log(myName);
// ==========================
// 4. IN operator
// ==========================
// The in operator returns the boolean value true/false.
// The in operator returns true if a property exists in the
// object or its prototype chain.
const car = {
  model: "Buggati",
  color: "silver",
  price: 678987654,
};
const isModel = "model" in car;
const isError = "speed" in car;
console.log(car);
console.log(isModel);
console.log(isError);
// ==========================
// 5. SPREAD OPERATOR
// ==========================
// Array
const numbersOne = [1, 2, 3];
console.log(numbersOne);
const numbersTwo = [4, 5, 6];
console.log(numbersTwo);
const combinedArr = [...numbersOne, ...numbersTwo];
console.log(combinedArr);
// destructure arr
const [x, y, ...rest] = combinedArr;
console.log(x);
console.log(y);
console.log(...rest);
// OBJECTS
// add salary property to employee object
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};
console.log(myVehicle);
const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};
console.log(updateMyVehicle);
const updatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(updatedVehicle);

const includeSalary = true;
const Employee = {
  firstName: "Bernard",
  lastName: "Ncho",
  department: "IT",
};
console.log(Employee);
if (includeSalary) {
  Employee.salary = 60000;
}
console.log(Employee);
const salary = 40000;
const newEmployee = { salary, ...Employee };
console.log(newEmployee);

const isLoggedIn = true;

const User = {
  username: "Huncho",
  password: 1234567,
  ...(isLoggedIn && { email: "hazardmburu10@gmail.com" }),
};

console.log(User);
const scores = [10, 20, 30, 40];
console.log(scores);
const newScores = [...scores];
console.log(newScores);
// ==========================
// 6. REST OPERATOR
// ==========================

const findSum = (...args) => {
  console.log(args);
};

findSum(5, 6, 7);
const student = {
  sudentName: "wertyui",
  regNo: 12345678,
  course: "BCT",
};

console.log(student);
const { regNo, ...newStudent } = student;
console.log(newStudent);
newStudent.regNo = "CT202/100789/19";
console.log(newStudent);

// ==========================
// 7. INCLUDES
// ==========================
const fruits = ["kiwi", "dragon fruit", "orange", "apple"];

console.log(fruits);

console.log(fruits.includes("kiwi"));

if (fruits.includes("kiwi")) {
  console.log("yes");
}
if (fruits[0].includes("i")) {
  console.log("NCHO");
}

const myNameHuncho = "bernard";
console.log(myNameHuncho);

if (myNameHuncho.includes("r")) {
  console.log("Bingo");
}
// ==========================
// 8. SET
// ==========================

const NAMES = new Set();

NAMES.add("Bernard");
NAMES.add("Mburu");

console.log(NAMES);

console.log(typeof NAMES);
let text = "";
console.log(text);
const LETTERS = new Set();
// add letters
LETTERS.add("a");
LETTERS.add("b");
LETTERS.add("c");
LETTERS.add("d");
LETTERS.add("f");
console.log(LETTERS);

LETTERS.forEach((value) => {
  text += value;
});

console.log(text);
// set with spread operator
const colors = [
  "red",
  "blue",
  "white",
  "blue",
  "green",
  "yellow",
  "black",
  "yellow",
];
console.log(colors);
console.log(colors.length);

const uniqueColors = [...new Set(colors)];
console.log(uniqueColors);
console.log(uniqueColors.length);
let color = "";
uniqueColors.forEach((value) => {
  color += value;
});
console.log(color);

// ==========================
// 9. FOREACH
// ==========================
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}
console.log(sum);

const NUMBERS = [65, 44, 12, 4];
NUMBERS.forEach(Function);

function Function(item, index, arr) {
  console.log((arr[index] = item * 10));
}
// ==========================
// 10. ARRAY.isArray()
// ==========================
const myFruits = ["kiwi", "passion", "mango", "banana"];

console.log(Array.isArray(myFruits));
const myNameMe = "nnnnnnn";

// ==========================
// 11.SOME()
// ==========================
const assets = [
  { id: 1, title: "v-1", type: "video" },
  { id: 2, title: "v-2", type: "video" },
  { id: 3, title: "A-1", type: "Audio" },
];
const hasVideoAsset = assets.some((asset) => asset.type === "video");
console.log(hasVideoAsset);
// ==========================
// 12. MAP()
// ==========================
const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

persons.map((person) => {
  const userName = person.firstname + person.lastname;
  console.log(userName);
});
// ==========================
// 13. NUMERIC SEPARATOR(_)
// ==========================

const largeInteger = 30_000_000;
console.log(largeInteger === 30000000);
// ==========================
// 14. PASS FUNCTION ARGUEMENTS AS AN OBJECT
// ==========================

const calcArea = ({ RADIUS, PI }) => {
  return PI * RADIUS * RADIUS;
};
console.log(
  calcArea({
    RADIUS: 14,
    PI: 3.142,
  })
);

console.log(calcArea({ RADIUS: 4, PI: 5 }));
// ==========================
// 15. OBJECT DESTRUCTURING ON ARRAYS
// ==========================

const DANCE = ["reverse", "shaku", "miondoko", "odi"];

console.log(DANCE);

const { 0: revesreDance, 3: odiDance } = DANCE;
console.log(revesreDance);
console.log(odiDance);

DANCE.map((dance) => {
  console.log(dance);
});
// ==========================
// 16. SKIP VALUES IN ARRAY DESTRUCTURING
// ==========================
const DIGITS = [10, 100, 39, 46, 57, 67, 78];

const [, , ...newDigits] = DIGITS;
console.log(newDigits);

const [, , thrid, , sixth] = DIGITS;

console.log(thrid);
console.log(sixth);
// ==========================
// 17. JSON.stringify() convert an object to JSON
// ==========================

const stuDents = {
  id: 1,
  name: "Huncho",
};
const dataFormat = JSON.stringify(stuDents, null, 2);

console.log(dataFormat);
// =================================
// 18. JSON.parse()
// =================================
const revertStuDentsObject = JSON.parse(dataFormat);
console.log(revertStuDentsObject);
// =================================
// 19. Filter with JSON.stringify
// =================================

const EMPLOYEE = {
  id: 1,
  empName: "huncho",
  address: {
    street: "karura",
    box: 30006,
    zip: "001001",
  },
};
console.log(EMPLOYEE);
const filters = ["empName", "address", "box", "zip"];
const filterEmp = JSON.stringify(EMPLOYEE, filters);

console.log(filterEmp);
// =================================
// 20. OPIONAL CHAINING
// =================================
const EMP = {
  id: 1,
  empName: "huncho",
  address: {
    street: "karura",
    box: 30006,
    zip: "001001",
  },
};
const EMPOBJ = EMP?.address;
console.log(EMPOBJ);
// ======================================
// Optional Chaining in functional call
// ======================================

const age = 18;
console.log(age);

const GREETINGS = (greetings) => {
  return greetings;
};

if (age >= 18) {
  console.log(GREETINGS?.("Hello"));
}

const AGES = [19, 29, 19, 26, 34, 45, 37, 12, 35, 47];
console.log(AGES);

const filteredAges = AGES.filter((age) => age > 18);
console.log(filteredAges);
// ===========================================
// 21. Convert to a flat array using Array.flat
// ===========================================
const convertToFlat = [23, 34, [56, 7], 89, 90];
console.log(convertToFlat);

const newArr = convertToFlat.flat();
console.log(newArr);
// ========================================
// 22. console.time() && console.timeEnd()
// =========================================
let SUM = 0;
const NUMBS = [65, 44, 12, 4];
NUMBS.forEach(FINDSUM);
function FINDSUM(item) {
  SUM += item;
}
console.log(SUM);
// ========================================
// 23. console.assert()
// ========================================
const DETAILS = {
  id: 12,
  EmpName: "John matasia",
  role: "Engineer",
};

console.assert(DETAILS.salary, "Salary Doesn't Exist");
// ========================================
// 24. Object.freeze()
// =========================================

const OBJ = {
  first_name: "name",
  last_name: "lastName",
};

console.log(OBJ);

Object.freeze(OBJ);
// throws an error
OBJ.age = 20;
console.log(OBJ.age);
// ========================================
// 25. Try & catch
// =========================================
try {
  const myObj = {};
  myObj();
} catch (error) {
  console.log(error);
}
