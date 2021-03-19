import { Card } from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import BudgetList from '../../components/kitty/BudgetList';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import NumberFormat from 'react-number-format';
import { initialIncome, initialExpenses } from '../../data/kitty';

export default function Kitty() {
  const [incomes, setIncomes] = useLocalStorage('incomes', initialIncome);
  const [expenses, setExpenses] = useLocalStorage('expenses', initialExpenses);

  const editRow = () => {
    console.log('edit');
  };

  const totalIncomes = incomes?.reduce((acc, income) => acc + income.amount, 0);
  const totalExpenses = expenses?.reduce(
    (acc, expenses) => acc + expenses.amount,
    0
  );
  const leftToSpend = totalIncomes - totalExpenses;

  const addIncome = (data) => {
    setIncomes([...incomes, data]);
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
            handleEdit={editRow}
          />
        </Card>

        <Card>
          <BudgetList
            handleData={(data) => setExpenses([...expenses, data])}
            type="expenses"
            data={expenses}
          />
        </Card>

        <Card>
          <div className="px-6 py-5 border-b-2 border-gray-100 dark:border-gray-800">
            <h2 className="text-xl">Summary</h2>
          </div>
          <div className="flex divide-x divide-gray-100 dark:divide-gray-800">
            <div className="flex-1 p-6">
              <div className="font-mono text-sm tracking-wide text-gray-400 uppercase">
                Income
              </div>
              <div className="mt-1 text-3xl font-bold text-blue-600 dark:text-blue-400">
                <NumberFormat
                  value={totalIncomes}
                  displayType={'text'}
                  thousandSeparator={' '}
                  suffix={':-'}
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
                  thousandSeparator={' '}
                  suffix={':-'}
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
                  thousandSeparator={' '}
                  suffix={':-'}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
