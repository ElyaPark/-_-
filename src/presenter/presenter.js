class Presenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        document.getElementById('transaction-form').addEventListener('submit', this.handleAddTransaction.bind(this));
        document.getElementById('type-filter').addEventListener('change', this.handleFilters.bind(this));
        document.getElementById('category-filter').addEventListener('change', this.handleFilters.bind(this));

        this.updateView();
    }

    handleAddTransaction(event) {
        event.preventDefault();

        const type = document.getElementById('type').value;
        const category = document.getElementById('category').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (!type || !category || isNaN(amount) || amount <= 0) {
            alert('Пожалуйста, заполните все поля корректно!');
            return;
        }

        this.model.addTransaction({ type, category, amount });
        this.updateView();
        event.target.reset();
    }

    handleFilters() {
        const type = document.getElementById('type-filter').value;
        const category = document.getElementById('category-filter').value;
        const filteredTransactions = this.model.filterTransactions(type, category);
        this.view.renderTransactions(filteredTransactions, this.handleDeleteTransaction.bind(this));
    }

    handleDeleteTransaction(index) {
        this.model.deleteTransaction(index);
        this.updateView();
    }

    updateView() {
        this.view.renderBalance(this.model.getBalance());
        this.view.renderTransactions(this.model.transactions, this.handleDeleteTransaction.bind(this));
    }
}

export default Presenter;
