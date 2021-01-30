import { Card, CardContent } from '../components/Card';
import PageHeader from '../components/PageHeader';

About.Favicon = '🧐';

export default function About() {
  return (
    <>
      <PageHeader
        title="About me"
        text="For the past 10 years I've worked as a designer and frontend developer with a focus on creating minimal and user friendly interfaces."
      />
      <Card>
        <CardContent>
          <h2 className="h3">Background</h2>
          <p className="mt-2">
            Before moving to Stockholm I spent 2 years studying web design at
            Halmstad university. The program had great courses on project
            management and agile methodologies that I still find useful to this
            day.
          </p>
          <p className="mt-4">
            When graduating in 2012 I was offered the role as designer at Get a
            newsletter. Since then I’ve been responsible for evolving the user
            experience and overall quality of the product.
          </p>
          <p className="mt-4">
            In 2015 I started a web agency with my friend Seyamak Arkannia. Our
            main focus is to help small businesses with their online presence –
            everything from identity and design to content management and
            development.
          </p>
          <h2 className="mt-6 h3">Process</h2>
          <p className="mt-2">
            I prefer to do most of my design work right in the browser, I
            believe you get the best feeling for a design when viewed in the
            intended medium. This idea has led me down the path of learning
            frontend development, I love when I have the opportunity to be
            involved in both the design and development process.
          </p>
          <h2 className="mt-6 h3">Interests</h2>
          <p className="mt-2">
            I spend my free time watching football(come on Arsenal), going to
            the gym and enjoying time with friends and family. I also have a big
            interest in food. I love to explore new restaurants and most of my
            travel plans are highly influenced by the reputation of the local
            food scene 👋 🇪🇸
          </p>
        </CardContent>
      </Card>
    </>
  );
}
