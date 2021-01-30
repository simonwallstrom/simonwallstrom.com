import PageHeader from '../components/PageHeader';
import ChangeLog from '../components/ChangeLog';
import ProjectList from '../components/ProjectList';

Home.Favicon = '👋';

export default function Home({ commit }) {
  return (
    <>
      <PageHeader
        title="Hello, I'm Simon"
        text="Product designer at Get&nbsp;a&nbsp;Newsletter and cofounder of
          Craftmade. Currently living in Stockholm, Sweden."
      />
      <div className="space-y-6 sm:space-y-12">
        <ProjectList />
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
