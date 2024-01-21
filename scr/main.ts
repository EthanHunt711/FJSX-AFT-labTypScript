// let p:number;
// let r:number;
// let n:number;

// type inputValues = number
//convert year to month
let yearToMonth = (n:number): number => {
    return n * 12
}

//convert the rate to monthly
let rateToMonth = (r:number): number =>{
    return (r / 100) / 12
}


//function to calculate the monthly payment
const monthlyPayment = (p:number, r:number, n:number): number =>{
    return (p * ((rateToMonth(r) * ((1 + rateToMonth(r)) ** yearToMonth(n))) / (((1 + rateToMonth(r)) ** yearToMonth(n)) - 1)))
}



//get the calculate button
const calculateBtn = document.querySelector('#calculateBtn') as HTMLButtonElement; 

//get the mortgage size
const userMortgageSize = document.querySelector('#mortgageSize') as HTMLInputElement;
//get the mortgage rate
const interestRate = document.querySelector('#interestRate') as HTMLInputElement;
//get the mortgage duration
const payBackPlan = document.querySelector('#payBackPlan') as HTMLInputElement;

//event handling
calculateBtn.addEventListener('click', (e: Event) => {
    e.preventDefault()
    console.log(monthlyPayment(userMortgageSize.valueAsNumber, interestRate.valueAsNumber, payBackPlan.valueAsNumber).toFixed())
})
