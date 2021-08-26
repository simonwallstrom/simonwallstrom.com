import cookbaseImage from '../public/cookbase.png';
import budgetImage from '../public/budget-app.png';
import ganImage from '../public/getanewsletter.png';
import craftmadeImage from '../public/craftmade.png';

const projects = [
  {
    category: 'Side project',
    image: cookbaseImage,
    title: 'Cookbase',
    slug: 'cookbase',
    link: 'https://cookbase.vercel.app/',
    linkText: 'Visit app',
    text: 'Meet Cookbase – The simple way to collect and organize your favourite recipes. I have searched high and low for a decent recipe manager, but all of the current options do way too much. This is my attempt to make a simpler version. Bear in mind – It is still work in progress...',
  },
  {
    category: 'Side project',
    image: budgetImage,
    title: 'Budget app',
    slug: 'budget-app',
    link: '/projects/budget-app',
    linkText: 'Visit app',
    text: 'A simple budget app I created to expand my knowledge of Javascript and React. Add your income and expenses and get a summary of your personal finances.',
  },
  {
    category: 'Day job',
    image: ganImage,
    title: 'Get a Newsletter',
    slug: 'getanewsletter',
    link: 'https://getanewsletter.com',
    linkText: 'Visit site',
    text: 'I spend my days at Get a Newsletter – an email marketing tool based in Stockholm, Sweden. As the sole designer at the company my days are quite mixed, but you mostly find me coding new components and improving the UX in our React app.',
  },
  {
    category: 'Night job',
    image: craftmadeImage,
    title: 'Craftmade',
    slug: 'craftmade',
    link: 'https://craftmade.co',
    linkText: 'Visit site',
    text: 'Apart from my day job I run a tiny web agency with my friend Seyamak Arkannia. Our main focus is to help small businesses with their online presence – everything from identity and design to development.',
  },
];

export default projects;
