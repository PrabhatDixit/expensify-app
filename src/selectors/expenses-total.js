const getExpensesTotal = (expenses) => {
    
    let total = 0;

    expenses.map( (expense) => {
        return (
            expense.amount ? total +=expense.amount : total
            )
    })

    return total;
}

export default getExpensesTotal;