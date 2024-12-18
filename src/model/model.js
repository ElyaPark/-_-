class Model {
    constructor() {
        this.transactions = [];
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

    deleteTransaction(index) {
        this.transactions.splice(index, 1);
    }

    getBalance() {
        return this.transactions.reduce((acc, transaction) => {
            return transaction.type === 'income' ? acc + transaction.amount : acc - transaction.amount;
        }, 0);
    }

    filterTransactions(type, category) {
        return this.transactions.filter(transaction => {
            const typeMatch = !type || transaction.type === type;
            const categoryMatch = !category || transaction.category === category;
            return typeMatch && categoryMatch;
        });
    }
}

export default Model;
