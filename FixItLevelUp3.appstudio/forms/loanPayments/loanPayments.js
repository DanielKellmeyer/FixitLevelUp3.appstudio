let carResult = 0
let homeResult = 0
let amount = 0
let timeFrame = 0
let interestRate = 0
let decision = 0
let answer = 0

function carLoanPayments(a, t, i) {
  carResult = (a * i) / (t * 12);
}

function homeLoanPayments(a, t, i) {
  homeResult = (a * i) / (t * 12);
}

decision = prompt("Please enter 'Car' or 'Home' for specific monthly loan payment calculations.")

if (decision == 'Car' || decision == 'car') {
  do {
    amount = prompt("Enter the amount of your car loan.")
    timeFrame = prompt("Enter the time frame of your car loan in years.")
    interestRate = prompt("Enter the interest rate of your car loan.")
    carLoanPayments(amount, timeFrame, interestRate);
    alert('A car loan for $' + amount + ' over ' + timeFrame + ' years at %' + interestRate + ' interest would have a monthly payment of $' + carResult);
    answer = prompt("To make another calculation please type Continue, otherwise type Quit.")
  } while (answer == 'Continue');
} else if (decision == 'Home' || decision == 'home') {
  do {
    amount = prompt("Enter the amount of your home loan.")
    timeFrame = prompt("Enter the time frame of your home loan in years.")
    interestRate = prompt("Enter the interest rate of your home loan.")
    homeLoanPayments(amount, timeFrame, interestRate);
    alert('A home loan for $' + amount + ' over ' + timeFrame + ' years at %' + interestRate + ' interest would have a monthly payment of $' + homeResult);
    answer = prompt("To make another calculation please type Continue, otherwise type Quit.")
  } while (answer == 'Continue');
} else if (answer == 'Quit' || answer == 'quit') {
  alert('Have a nice day!')
}
