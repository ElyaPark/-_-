class View {
    constructor(container) {
        this.container = container;
        this.createUI();
    }

    createUI() {
        this.container.innerHTML = `
            <div class="container">
                <h1>Финансовый Трекер</h1>
                
                <div class="balance">
                    <h2>Общий баланс: <span id="total-balance">0</span> руб.</h2>
                </div>

                <div class="form-container">
                    <form id="transaction-form">
                        <select id="type" required>
                            <option value="">Выберите тип операции</option>
                            <option value="income">Доход</option>
                            <option value="expense">Расход</option>
                        </select>

                        <select id="category" required>
                            <option value="">Выберите категорию</option>
                            <option value="salary">Зарплата</option>
                            <option value="food">Еда</option>
                            <option value="transport">Транспорт</option>
                            <option value="entertainment">Развлечения</option>
                        </select>

                        <input type="number" id="amount" placeholder="Сумма" required min="0.01" step="0.01">
                        
                        <button type="submit">Добавить операцию</button>
                    </form>
                </div>

                <div class="transactions-container">
                    <h2>Список операций</h2>
                    <div id="transactions-list"></div>
                </div>

                <div class="filters">
                    <h2>Фильтры</h2>
                    <select id="type-filter">
                        <option value="">Все операции</option>
                        <option value="income">Доходы</option>
                        <option value="expense">Расходы</option>
                    </select>
                    <select id="category-filter">
                        <option value="">Все категории</option>
                        <option value="salary">Зарплата</option>
                        <option value="food">Еда</option>
                        <option value="transport">Транспорт</option>
                        <option value="entertainment">Развлечения</option>
                    </select>
                </div>
            </div>
        `;
        this.balanceElement = document.getElementById('total-balance');
        this.transactionsList = document.getElementById('transactions-list');
    }

    renderBalance(balance) {
        this.balanceElement.textContent = balance.toFixed(2);
    }

    renderTransactions(transactions, deleteCallback) {
        this.transactionsList.innerHTML = '';
        transactions.forEach((transaction, index) => {
            const transactionElement = document.createElement('div');
            transactionElement.classList.add('transaction', transaction.type);

            transactionElement.innerHTML = `
                <span>${transaction.category}</span>
                <span>${transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)} руб.</span>
                <button data-index="${index}">Удалить</button>
            `;
            transactionElement.querySelector('button').addEventListener('click', () => deleteCallback(index));
            this.transactionsList.appendChild(transactionElement);
        });
    }
}

export default View;
