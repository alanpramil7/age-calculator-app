// Calculate age 
function calculateAge(birthDateString) {

    const moment = window.moment; // access moment
    
    let birthDate = moment(birthDateString, 'DD-MM-YYYY').toDate();

    
    try {  
        let birthDate = moment(birthDateString, 'DD-MM-YYYY').toDate();
        today = new Date();  
    } catch (error) {
        console.log('Invalid birth date format');
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();  

    let months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months = 12 + today.getMonth() - birthDate.getMonth();
    }

    let days = today.getDate() - birthDate.getDate();
    let isLeapYear = new Date(birthDate.getFullYear(), 1, 29).getMonth() === 1;
    
    if (days < 0) {
        months--;
        let daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days = daysInLastMonth + today.getDate() - birthDate.getDate();
        
        if (isLeapYear) {
        days++; 
        }
    }

    return `${years} years ${months} months ${days} days`;
}


// Usage
let birthDate = '09-02-1999'; 
let age = calculateAge(birthDate);
console.log(age); 