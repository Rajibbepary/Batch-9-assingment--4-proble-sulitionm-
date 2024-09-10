

function inchTofit(inch){
    const feet = inch / 12;
    return feet;
}

//complex function part

function inchTofit2(inch){
    const feet = inch / 12;
    const fitNumber = parseInt(feet);
    const inchRemaining = inch % 12;
    const result = fitNumber + ' fit ' + inchRemaining + ' inch ';
    return result;
}

const rajHight = inchTofit2(75);
//console.log(rajHight);


//miletokilometer

function mileTokilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const totalkilo = mileTokilometer(12);
//console.log(totalkilo);

//year will be a leep year if the is divisible by 4
//simple leapyear
function isLeapyear(year){
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }
}

const leapYear = isLeapyear(2040);
//console.log(leapYear);
//leap year complex funtion
function isLeapyear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }else{
        return false;
    }
}

const leapYear2 = isLeapyear2(2100);
const leapYear3 = isLeapyear2(2400);
const leapYear4 = isLeapyear2(1900);
const leapYear5 = isLeapyear2(2050);

//console.log(leapYear2, leapYear3, leapYear4, leapYear5);

// function bizor count aveage

function oddAverage(numbers){

    const odds = [];

    for(const number of numbers){
        if(number % 2 === 1){
            //console.log(number);
            odds.push(number);
        }
    }
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    const avg = sum / count;
    return avg;
}
const numbers = [42, 13, 58, 65, 81, 7];
const avg = oddAverage(numbers);
//console.log(avg);

const biryankhor = ['rajib', 'sojib', 'setu', 'metu', 'hasan', 'rajib', 'sojib'];


function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biryankhor);
//console.log(uniqueArray);



const min = Math.min(12, 4, 19, 40, 32, 50,);
console.log(min);//low number found
const max = Math.max(12, 4, 19, 40, 32, 50,);
console.log(max);//hight number founnd

console.log(Math.PI);
console.log(Math.abs(5-10));
console.log(Math.round(4.64));
console.log(Math.floor(2.99995))
console.log(Math.ceil(2.99995))
console.log(Math.random())
