import { Card } from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import BudgetList from '../../components/kitty/BudgetList';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import NumberFormat from 'react-number-format';
import { initialIncome, initialExpenses } from '../../data/kitty';

export default function Kitty() {
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
        title="Kitty"
        text="Add your income and expenses and get a summary of your monthly personal finances."
      />

      <div className="space-y-6 sm:space-y-12">
        <Card>
          <BudgetList
            type="income"
            data={incomes}
            handleData={(data) => addIncome(data)}
            handleDelete={deleteIncome}
          />
        </Card>

        <Card>
          <BudgetList
            type="expenses"
            data={expenses}
            handleData={(data) => addExpense(data)}
            handleDelete={deleteExpense}
          />
        </Card>

        <Card>
          <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800">
            <h2 className="text-xl">Summary</h2>
          </div>
          <div className="flex flex-col divide-y divide-gray-100 sm:divide-y-0 sm:divide-x sm:flex-row dark:divide-gray-800">
            <div className="flex-1 p-6">
              <div className="font-mono text-sm tracking-wide text-gray-400 uppercase">
                Income
              </div>
              <div className="mt-1 text-3xl font-bold text-blue-600 dark:text-blue-400">
                <NumberFormat
                  value={totalIncomes}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'€'}
                />
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="font-mono text-sm tracking-wide text-gray-400 uppercase">
                Expenses
              </div>
              <div className="mt-1 text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                <NumberFormat
                  value={totalExpenses}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'€'}
                />
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="font-mono text-sm tracking-wide text-gray-400 uppercase">
                Left to spend
              </div>
              <div className="mt-1 text-3xl font-bold text-green-600 dark:text-green-400">
                <NumberFormat
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
