"use strict";
// let p:number;
// let r:number;
// let n:number;
// type inputValues = number
//convert year to month
let yearToMonth = (n) => {
    return n * 12;
};
//convert the rate to monthly
let rateToMonth = (r) => {
    return (r / 100) / 12;
};
//function to calculate the monthly payment
const monthlyPayment = (p, r, n) => {
    return (p * ((rateToMonth(r) * ((1 + rateToMonth(r)) ** yearToMonth(n))) / (((1 + rateToMonth(r)) ** yearToMonth(n)) - 1)));
};
//get the calculate button
const calculateBtn = document.querySelector('#calculateBtn');
//get the mortgage size
const userMortgageSize = document.querySelector('#mortgageSize');
//get the mortgage rate
const interestRate = document.querySelector('#interestRate');
//get the mortgage duration
const payBackPlan = document.querySelector('#payBackPlan');
//event handling
calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(monthlyPayment(userMortgageSize.valueAsNumber, interestRate.valueAsNumber, payBackPlan.valueAsNumber).toFixed());
});
