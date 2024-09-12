


function calculateTax(income, expense) {
   
    if (typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }
    let profit = income - expense;
    let tax = profit * 0.20;
    return tax;
}




function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }

    const parts = email.split('@');
    const userName = parts[0];
    const domainName = parts[1];
    return `${userName} sent you an email from ${domainName}`;
}



function checkDigitsInName(name) {
    
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }
    
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== ' ') {  
            return true;
        }
    }

    return false;
}




function calculateFinalScore(obj) {
    
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFFamily } = obj;

    if (typeof name !== "string" || typeof testScore !== "number" || typeof schoolGrade !== "number" || typeof isFFamily !== "boolean") {
        return "Invalid Input";
    }

    if (testScore > 50 || schoolGrade > 30 || testScore < 0 || schoolGrade < 0) {
        return "Invalid Input";
    }

    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
         finalScore += 20;
    }
    return finalScore >= 80;
}



function waitingTime(waitingTimes, serialNumber) {
   
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    for (let i = 0; i < waitingTimes.length; i++) {
        if (typeof waitingTimes[i] !== 'number') {
            return "Invalid Input";
        }
    }

    let people_left = serialNumber - waitingTimes.length - 1;

    if (people_left <= 0) {
        return 0;
    }

    let totalTime = waitingTimes.reduce((a, b) => a + b, 0);
    let avg_time = Math.round(totalTime / waitingTimes.length);

    let waiting_time = avg_time * people_left;

    return waiting_time;
}


