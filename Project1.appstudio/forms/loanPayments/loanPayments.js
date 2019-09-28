let carResult = 0

  function carLoanPayments(a, t, i) {
  carResult = (a*i)/t;
}

let decision = prompt("Please enter 'Car' or 'Home' for specific monthly loan payment calculations.")
let amount = prompt("Enter the amount of your loan.")
let timeFrame = prompt("Enter the time frame of your loan.")
let interestRate = prompt("Enter the interest rate of your loan.")

if (decision === 'Car' || decision === 'car') {
  carLoanPayments();
  let amount = carLoanPayments[0]
  let timeFrame = carLoanPayments[1]
  let interestRate =carLoanPayments[2]
  alert('A car loan for '+ amount +'over '+ timeFrame +'years at '+ interestRate +'interest would have a monthly payment of '+ carResult)
}

  
  
  /*
function homeLoanPayments(a2, t2, i2) {
  alert('A home loan for '+ arugment[0] +'over '+ arugment[1] +'years at '+ arugment[2] +'interest would have a monthly payment of '+ return (argument[0] * argument[2]) / argument[1])
  }

  
  alert('A car loan for '+ arugment[0] +'over '+ arugment[1] +'years at '+ arugment[2] +'interest would have a monthly payment of '+ carLoanPayments())
  
  
  function carLoanPayments(a, t, i) {
  carResult = (a*i)/t;
}
*/