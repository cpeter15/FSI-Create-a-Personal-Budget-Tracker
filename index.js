let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
}
answer = 0

for(let i = 0; i < monthlyExpenseQuestions.length; i++){
    answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer
}
answer = 0

for(let i = 0; i < annualExpenseQuestions.length; i++){
    answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + answer
}