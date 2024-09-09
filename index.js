

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

console.log(monthlySavings([1000, 2000, 3000, 5400]));
console.log(monthlySavings([1000, 2000, 2500, 5000]));

