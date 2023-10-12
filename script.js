

const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");

const dayError = document.getElementById("error-day");
const monthError = document.getElementById("error-month");
const yearError = document.getElementById("error-year");

const resultDay = document.getElementById("result-day");
const resultMonth = document.getElementById("result-month");
const resultYear = document.getElementById("result-year");

const getResult = document.getElementById("result");

let birthDate = `${inputDay.value}-${inputMonth.value}-${inputYear.value}`

 
getResult.addEventListener("click",function(){
    const day = inputDay.value;
    const month = inputMonth.value;
    const year = inputYear.value;

    const currentYear = new Date().getFullYear()
    let today = new Date()
    // console.log(currentYear);

    // Error and Error Reset

    let isError = false;

    let labelDay = document.getElementById("label-day")

    if(isNaN(day) || day < 1|| day > 31){
        dayError.textContent = "Must be a valid Day";
        labelDay.style.color = "red"
        inputDay.style.border = "1px solid red"
        isError = true;
    }else {
        dayError.textContent =""
        labelDay.style.color = "initial"
        inputDay.style.border = "1px solid var(--neutral-400)"
    }

    let labelMonth = document.getElementById("label-month")

    if(isNaN(month) || month < 1|| month > 12){
        monthError.textContent = "Must be a valid Month";
        labelMonth.style.color = "red"
        inputMonth.style.border = "1px solid red"
        isError = true;
    }else {
        monthError.textContent =""
        labelMonth.style.color = "initial"
        inputMonth.style.border = "1px solid var(--neutral-400)"
    }

    let labelYear = document.getElementById("label-year")

    if(isNaN(year) || year > today.getFullYear()){
        yearError.textContent = "Must be a past year";
        labelYear.style.color = "red"
        inputYear.style.border = "1px solid red"
        isError = true;
    }else {
        yearError.textContent =""
        labelYear.style.color = "initial"
        inputYear.style.border = "1px solid var(--neutral-400)"
    }

    if(isError){
        return
    }

    // Age Calculation

    let diffYear = today.getFullYear() - year
    // console.log(diffYear);

    let diffMonth = today.getMonth() - month
    if(diffMonth < 0 || (diffMonth === 0 && today.getDate() < day)){
        diffYear--;
        diffMonth = 12 + today.getMonth() - month
    } 
    // console.log(diffMonth);

    let diffDay = today.getDate() - day
    let isLeapYear = new Date(year, 1, 29).getMonth() === 1;
    
    if (diffDay < 0){
        diffMonth--;
        let daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
        diffDay = daysInLastMonth + today.getDate() - day
    }
    
    if (isLeapYear){
        diffDay++
    }
    
    // console.log(diffDay);

    // Result Display
    
    resultDay.innerHTML = diffDay
    resultMonth.innerHTML = diffMonth
    resultYear.innerHTML = diffYear

})