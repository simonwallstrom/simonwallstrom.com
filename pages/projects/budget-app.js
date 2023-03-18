import { Card } from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import BudgetTable from '../../components/budget-app/BudgetTable';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { NumericFormat } from 'react-number-format';
import { initialIncome, initialExpenses } from '../../data/budget-app';

BudgetApp.Favicon = '💰️';

export default function BudgetApp() {
  const [incomes, setIncomes] = useLocalStorage('incomes', initialIncome);
  const [expenses, setExpenses] = useLocalStorage('expenses', initialExpenses);

  const totalIncomes = incomes?.reduce((acc, income) => acc + income.amount, 0);
  const totalExpenses = expenses?.reduce(
    (acc, expenses) => acc + expenses.amount,
    0
  );
  const leftToSpend = totalIncomes - totalExpenses;

  const addIncome = (data) => {
    setIncomes([...incomes, data]);
  };

  const deleteIncome = (id) => {
    const remainingIncomes = incomes.filter((income) => id !== income.id);
    setIncomes(remainingIncomes);
  };

  const addExpense = (data) => {
    setExpenses([...expenses, data]);
  };

  const deleteExpense = (id) => {
    const remainingExpenses = expenses.filter((expense) => id !== expense.id);
    setExpenses(remainingExpenses);
  };

  return (
    <>
      <PageHeader
        title="Budget app"
        text="Add your income and expenses and get a summary of your monthly personal finances."
      />

      <div className="space-y-6 sm:space-y-12">
        <Card>
          <BudgetTable
            type="income"
            data={incomes}
            handleData={(data) => addIncome(data)}
            handleDelete={deleteIncome}
          />
        </Card>

        <Card>
          <BudgetTable
            type="expenses"
            data={expenses}
            handleData={(data) => addExpense(data)}
            handleDelete={deleteExpense}
          />
        </Card>

        <Card>
          <div className="p-4 border-b border-gray-100 sm:px-6 sm:py-5 dark:border-gray-800">
            <h2 className="text-lg sm:text-xl">Summary</h2>
          </div>
          <div className="flex flex-col divide-y divide-gray-100 sm:divide-y-0 sm:divide-x sm:flex-row dark:divide-gray-800">
            <div className="flex-1 p-4 sm:px-6 sm:py-5">
              <div className="font-mono text-xs tracking-wide text-gray-500 uppercase sm:text-sm">
                Income
              </div>
              <div className="mt-1 text-2xl font-bold text-blue-600 sm:text-3xl dark:text-blue-400">
                <NumericFormat
                  value={totalIncomes}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'€'}
                />
              </div>
            </div>
            <div className="flex-1 p-4 sm:px-6 sm:py-5">
              <div className="font-mono text-xs tracking-wide text-gray-500 uppercase sm:text-sm">
                Expenses
              </div>
              <div className="mt-1 text-2xl font-bold text-yellow-600 sm:text-3xl dark:text-yellow-400">
                <NumericFormat
                  value={totalExpenses}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'€'}
                />
              </div>
            </div>
            <div className="flex-1 p-4 sm:px-6 sm:py-5">
              <div className="font-mono text-xs tracking-wide text-gray-500 uppercase sm:text-sm">
                Left to spend
              </div>
              <div className="mt-1 text-2xl font-bold text-green-600 sm:text-3xl dark:text-green-400">
                <NumericFormat
                  value={leftToSpend}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'€'}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
