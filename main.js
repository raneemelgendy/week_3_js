function sayHello(theName, theGender) {
  // Your Code Here
  if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//-----------------------------------------------------------

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    return "Second Number Not Found";
  }

  switch (operation) {
    case "add":
      return firstNum + secondNum;
    case "subtract":
      return firstNum - secondNum;
    case "multiply":
      return firstNum * secondNum;
    default:
      return firstNum + secondNum;
  }
}

// Needed Output
console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600

//-----------------------------------------------------------

function ageInTime(theAge) {
  // Your Code Here
  if (theAge > 100 || theAge < 10) {
    return "Age out of range";
  } else {
    return (
      theAge * 12 +
      " months\n" +
      theAge * 12 * 4 +
      " weeks\n" +
      theAge * 12 * 30 +
      " days\n" +
      theAge * 12 * 30 * 24 +
      " hours\n" +
      theAge * 12 * 30 * 24 * 60 +
      " minutes\n" +
      theAge * 12 * 30 * 24 * 60 * 60 +
      " seconds\n"
    );
  }
}

// Needed Output
console.log(ageInTime(110)); // Age Out Of Range
console.log(ageInTime(38)); // Months Example => 456 Months


//-----------------------------------------------------------


function checkStatus(a, b, c) {
    // Your Code Here
    let name , age , isavailable;
    if(typeof a==='string'){
        name = a;
    }else if(typeof a==="number"){
        age = a;
    }else if(typeof a==="boolean"){
        isavailable = a;
    } 
       if(typeof b==='string'){
        name = b;
    }else if(typeof b==="number"){
        age = b;
    }else if(typeof b==="boolean"){
        isavailable = b;
    }
    if(typeof c==='string'){
        name = c;
    }else if(typeof c==="number"){
        age = c;
    }else if(typeof c==="boolean"){
        isavailable = c;
    }
    let availability = isavailable ? "Available For Hire" : "Not Available For Hire";
    return `Hello ${name}, Your Age Is ${age}, You Are ${availability}`;
  }

  
  
  // Needed Output
  console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
//-----------------------------------------------
function createSelectBox(startYear, endYear){
  let select = document.createElement("select")
  for (let i = startYear; i <= endYear; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);  
  }
  document.body.appendChild(select);

}

createSelectBox(2000,2025);

//-----------------------------------------------------------
function multiply(...numbers) {
  let result = 1;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    }

    let rounded = Math.floor(numbers[i]);  
    result *= rounded;
  }

  return result;
}

console.log(multiply(10, 20));        // 200
console.log(multiply("A", 10, 30));   // 300
console.log(multiply(100.5, 10, "B")); // 1000


//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here


let parts = zName.split(" ");
let fName = parts[0];
let lName = parts[1].charAt(0).toUpperCase();
return `${fName} ${lName}.`

    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here

let age = zAge.match(/\d+/)[0];
return`Your Age Is ${age}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here

   let countryCode = zCountry.slice(0 , 2).toUpperCase();
    return `You Live In ${countryCode}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    // Write Your Code Here
return `Hello ${namePattern(zName)} , ${ageWithMessage(zAge)} , ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//----------------------------------------------------------------------------

  let itsMe = _ =>  `Iam A Normal Function`;


console.log(itsMe()); // Iam A Normal

//---------------------------------

let urlCreate = (protocol, web, tld) =>`${protocol}://www.${web}.${tld}`;


console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//-----------------------------------------------------------------------------------

let checker = (zName)=>(status)=>(salary)=> status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;



console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
 console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//-------------------------------------------------------------

function specialMix(...data) {
  // Your Code Here
 let sum=0;
 let founded = false;

 for(let item of data){
      let num = parseInt(item);

      if (!isNaN(num)) {
        sum += num;
        founded=true;
        
      }

 }
       return founded ? sum : "All Is String";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings