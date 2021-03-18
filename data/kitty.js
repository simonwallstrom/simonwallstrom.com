export const categories = [
  {
    id: 1,
    type: 'income',
    category: {
      name: 'Active',
      color: 'text-green-600 dark:text-green-400',
    },
  },
  {
    id: 2,
    type: 'income',
    category: {
      name: 'Passive',
      color: 'text-blue-600 dark:text-blue-400',
    },
  },
  {
    id: 3,
    type: 'expenses',
    category: {
      name: 'Housing',
      color: 'text-yellow-600 dark:text-yellow-400',
    },
  },
  {
    id: 4,
    type: 'expenses',
    category: {
      name: 'Transportation',
      color: 'text-indigo-600 dark:text-indigo-400',
    },
  },
  {
    id: 5,
    type: 'expenses',
    category: {
      name: 'Savings',
      color: 'text-red-600 dark:text-red-400',
    },
  },
  {
    id: 6,
    type: 'expenses',
    category: {
      name: 'Utilities',
      color: 'text-teal-600 dark:text-teal-400',
    },
  },
  {
    id: 7,
    type: 'expenses',
    category: {
      name: 'Entertainment',
      color: 'text-pink-600 dark:text-pink-400',
    },
  },
];

export const initialIncome = [
  {
    name: 'Salary',
    category: {
      name: 'Active',
      color: 'text-green-600 dark:text-green-400',
    },
    amount: 25000,
  },
  {
    name: 'Rent',
    category: {
      name: 'Passive',
      color: 'text-blue-600 dark:text-blue-400',
    },
    amount: 5000,
  },
];

export const initialExpenses = [
  {
    id: 1,
    name: 'Mortgage',
    category: {
      name: 'Housing',
      color: 'text-yellow-600 dark:text-yellow-400',
    },
    amount: 5000,
  },
  {
    id: 2,
    name: 'Subway card',
    category: {
      name: 'Transportation',
      color: 'text-indigo-600 dark:text-indigo-400',
    },
    amount: 920,
  },
  {
    id: 3,
    name: 'Index funds',
    category: {
      name: 'Savings',
      color: 'text-red-600 dark:text-red-400',
    },
    amount: 2000,
  },
  {
    id: 4,
    name: 'Internet',
    category: {
      name: 'Utilities',
      color: 'text-teal-600 dark:text-teal-400',
    },
    amount: 399,
  },
];
