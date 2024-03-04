
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
const calculateBtn = document.querySelector('#calculateBtn') as HTMLButtonElement

//get the mortgage size
const userMortgageSize = document.querySelector('#mortgageSize') as HTMLInputElement
//get the mortgage rate
const interestRate = document.querySelector('#interestRate') as HTMLInputElement
//get the mortgage duration
const payBackPlan = document.querySelector('#payBackPlan') as HTMLInputElement
//get the tabel
const resultsTable = document.querySelector('.resultsTabel') as HTMLTableElement
//get the wrong input div
let wrongCard = document.querySelector('.wrongInputResult') as HTMLDivElement
//get the wrong input message div
let wrongMessage = document.querySelector('.wrongInput') as HTMLDivElement

// interface for calculating the results
interface CalculationResults{
    mortgage: number,
    rate:number,
    numberOfYears:number,
    monthPayment:number
}


// class for implementing the interface och getting the table row
class TableResults implements CalculationResults{
    constructor(public mortgage:number, public rate:number, public numberOfYears:number, public monthPayment:number) {}
    result(){ 
        let test:string = `<tr>
        <td>${this.mortgage}</th>
        <td>${this.rate}</th>
        <td>${this.numberOfYears}</th>
        <td>${this.monthPayment}</th>
    </tr>`

        return test   
    }
}


//event handling
calculateBtn.addEventListener('click', (e: Event) => {
    e.preventDefault()
    //check if the mortgage size is for large
    if (userMortgageSize.valueAsNumber > 100000000){
        wrongCard.style.display = 'flex'
        wrongMessage.innerHTML = 'Jag tror inte banken har så mycket pengar!'
    }
    //check if the rate is over the edge
    else if(interestRate.valueAsNumber > 10) {
        wrongCard.style.display = 'flex'
        wrongMessage.innerHTML = 'Jag tror inte vi behöver så mycket pengar!'
    }
    //check if the pay back plan is longer than usual
    else if(payBackPlan.valueAsNumber > 35) {
        wrongCard.style.display = 'flex'
        wrongMessage.innerHTML = 'Hoppas du hinner betala tillbacka så mycket pengar!'
    }
    //add the table row if everything is in check
    else { const result = new TableResults(userMortgageSize.valueAsNumber, interestRate.valueAsNumber, payBackPlan.valueAsNumber,  monthlyPayment(userMortgageSize.valueAsNumber, interestRate.valueAsNumber, payBackPlan.valueAsNumber))

        // add the row to the previous
        resultsTable.innerHTML += result.result()
    }
    
    
    
 
    
})
