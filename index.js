

//problem-1
function calculateMoney(ticketSale){

    if(ticketSale < 0 || typeof ticketSale !=='number'){
        return 'Invalid Number';
    }


    //let remainingAmount = ticketSale * 120 -(500 + 8 *50);
   // return remainingAmount;
   return ticketSale * 120 -(500 + 8 *50)
}
// console.log(calculateMoney (10));
// console.log(calculateMoney (1055));
// console.log(calculateMoney (93));
// console.log(calculateMoney (-130));
// console.log(calculateMoney ('htm'));//chance part

//problem-2
function checkName (name) {

    if (typeof name !== 'string') {
        return 'invalid';
    }
    // let lastLetter = name [name.length - 1]
    let lastLetter = name.slice(-1).toLowerCase();
     let result = false;
     let ckeckArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        for (let char of ckeckArray) {
         if (char === lastLetter){
             result = true;
         }
      }

   //let result = checkArray.includes(lastLetter);
     return result ? 'Good Name' : 'Bab Name';
}
// Test problem 2
// console.log(checkName('Salman'));
// console.log(checkName('RAFEE'));
// console.log(checkName(199));

//problem -3

function deleteInvalids(array) {

    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }


    let numberArray = []
    for (let element of array) {
        if (typeof element === 'number' && isNaN(element) === false){
            numberArray.push(element);
        }
    }
    return numberArray;
}

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, '12',[1, 2], {ob:'lala'},]));

// console.log(deleteInvalids(["1",{num:2},NaN]));
// console.log(deleteInvalids([1, 2, -3]));
// console.log(deleteInvalids({ num: [1, 2, 2]}));


//problem -04

function password(obj) {

    if (
        obj.name === undefined ||
        obj.siteName === undefined ||
        obj.birthYear.toString().length !== 4
    ){
        return 'Invalid';
    }



    let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let passwordString = capitalSiteName + '#' + obj.name + '@' + obj.birthYear;
    return passwordString
}
// console.log(password({name: 'kolimuddin', birthYear: 1999, siteName: 'google' }));

// console.log(password({name: 'rahat', birthYear: 2002, siteName: 'Facebook'}));

// console.log(password({name: 'toky', birthYear: 200, siteName: 'Facebook'}));
// console.log(password({name: 'maisha', birthYear: 2002}));


//problem-05

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number')
        {
        //return 'invalid input'
    }

    //calculate total income 
    let totalIncome = 0
    for (let payment of arr) {
        if (payment >= 3000){
            let tax = payment * 0.2
            totalIncome += payment - tax
        }else{
            totalIncome += payment;
        }
    }
    let savings = totalIncome - livingCost;
    // if(savings >=0){
    //     return savings
    // }else {
    //     return 'earn more'
    // }
    return savings >= 0 ? savings : 'earn more'
}

// console.log(monthlySavings([1000, 2000, 3000, 5400]));
//console.log(monthlySavings([1000, 2000, 2500, 5000]));

//Conceptual Session problem-01
function maxNumber(array){

    if(!Array.isArray(array)){
        return 'this is not an array'
    }

    let max = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}
//const numbers = [2, 4, 21, 5, 6, 23, 20, 40, 70];
// const numbers = true;
// const result = maxNumber(numbers)
// console.log(result);

//Conceptual Session problem-0

// function showInfo(info){

//     if(typeof info !== "object"){
//         return 'please provide a valid object'
//     }

//     const result = 'My name is'+ ' ' + info.name +' ' +'I am from' + ' ' + info.address;
//     return result;
// }

// const person = {
//     name:"Rajib",
//     address:"Faridpur"
// }

//const x =showInf o(person);
//const x =showInfo('person');
//console.log(x);

const person = {
    name:"Rajib",
    address:"Faridpur"
}
function createEmail(info){

    if(typeof info !== 'object'){
        return 'Invalid object';
    }
    const result =info.name+"@"+info.address+".com";
    return result;

}
//console.log(createEmail('person'));


//Conceptual Session problem -03

function monthlySavings(income){

    if(typeof income !== 'number'){
        return 'Invalid input'
    }

    const houseRent = 5000;
    const mealCost = 3000;
    const personalExpense =2000;
    const totalExpennse = houseRent + mealCost + personalExpense;

    if(totalExpennse > income){
        return 'Earn more';
    }

    const savings = income - totalExpennse;
    return savings;
}

 //const result = monthlySavings(7000)
// console.log(result);


//Conceptual Session problem -04

const x = [3, false, 2, true, "hello", false, 22, 60, 10,{name:'rajij'}];


function countBoolean(array){
    if(!Array.isArray(array)){
        return 'please provide valid arry'
    }
    let count = 0;

    for(let item of array){
        if(typeof item === 'boolean'){
            count ++
        }
    }
    return count;

    // for(let item of array){
    //     if(typeof item === 'number'){
    //         count ++
    //     }
    // }
    // return count;
}
//const result =countBoolean(x);
//console.log(result);


//problem conceptual session -05 

function rickshawVara(peoples){


    const bus = 50;
    const micro = 15;
    const rickshawCost = 20;

    const remainAfterbus = peoples % bus;

    const remainAftermicro = remainAfterbus % micro;

    return remainAftermicro * rickshawCost;
}
//console.log(rickshawVara(234));


//problem conceptual session -06

const person1 = {
    name:"Abul kashem",
    honors:40,
    hsc:30,
    isFFfamily:false
}

const person2 = {
    name:"mokbel",
    honors:45,
    hsc:32,
    isFFfamily:true
}

function jobSelection(info) {

    if(typeof info !== "object") {
        return "Invalid object";
    }

    let total_marks = info.honors + info.hsc;
    if(info.isFFfamily){
        total_marks = total_marks + (total_marks * 0.2);
    }

    console.log(total_marks);


if(info.isFFfamily && total_marks >= 80) {
    return "aho vateja aho..chakri to tomai.."
}else if(info.isFFfamily && total_marks < 80) {
    return "bad luck vateja aho..next time try.."
} else if(!info.isFFfamily && total_marks >= 80) {
    return "you get the job...";
}
 else if(!info.isFFfamily && total_marks < 80){
    return "Rajakar rajakar..."
}


    //console.log(total_marks);
    // if (total_marks >= 80) {
    //     return "you get the job"
    // }else{
    //     return "you failed"
    // }
}

console.log(jobSelection(person2));