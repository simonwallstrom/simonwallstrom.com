import Link from 'next/link';
import PageHeader from '../components/PageHeader';
import FeaturedProject from '../components/FeaturedProject';
import ChangeLog from '../components/ChangeLog';
import NowPlaying from '../components/NowPlaying';

Home.Favicon = '👋';

export default function Home({ commit }) {
  return (
    <>
      <PageHeader
        title="Hello, I'm Simon"
        text="Product designer at Get&nbsp;a&nbsp;Newsletter and cofounder of
        Craftmade. Currently living in Stockholm, Sweden."
      />
      <div className="mt-8 space-x-4 text-center">
        <Link href="/projects">
          <a className="btn btn--lg btn--primary">See my work</a>
        </Link>
        <Link href="/#contact">
          <a className="btn btn--lg btn--outline">Get in touch</a>
        </Link>
      </div>
      <div className="grid gap-8 mt-10 md:mt-16 lg:mt-24 md:grid-cols-2">
        <FeaturedProject
          category="Day job"
          title="Get a Newsletter"
          text="I spend my days designing and coding at Get&nbsp;a&nbsp;Newsletter
              – an email marketing tool based in Stockholm, Sweden."
          moreLink="getanewsletter"
          visitLink="https://getanewsletter.com"
        />
        <FeaturedProject
          category="Night job"
          title="Craftmade"
          text="I run a tiny web agency with my friend Seyamak Arkannia. We do
              identity, design and development for small businesses."
          moreLink="craftmade"
          visitLink="https://craftmade.co"
        />
        <FeaturedProject
          category="Side project"
          title="Kitty – Budget app"
          text="A budget app I created to expand my knowledge of React. Built with
              Next.js and Tailwind – Deployed and hosted with Vercel."
        />
        <FeaturedProject
          category="Side project"
          title="Sprout – Recipe app"
          text="After hours of research I have not found any simple apps for storing your personal recipes. This is my attempt to make a good one."
        />
        {/* <NowPlaying /> */}
        <ChangeLog commit={commit} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const query =
    'https://api.github.com/search/issues?q=repo:simonwallstrom/simonwallstrom.com+is:pr+is:merged+author:simonwallstrom&per_page=1';
  const res = await fetch(query);
  const commits = await res.json();
  const commit = commits.items[0];
  return {
    props: {
      commit,
    },
  };
}
