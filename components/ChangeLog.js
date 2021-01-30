import { GitPullRequest } from 'react-feather';
import { Card, CardContent, CardHeader } from './Card';
import CustomLink from './CustomLink';

export default function ChangeLog({ commit }) {
  const mergedAt = new Date(commit.closed_at);
  const mergedAtFormatted = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(mergedAt);

  return (
    <Card>
      <CardContent>
        <CardHeader
          text="Changelog"
          icon={<GitPullRequest size={18} />}
          className="text-indigo-600 dark:text-indigo-400"
        />
        <h3 className="mt-2 text-lg leading-tight clamp-2">
          <CustomLink href={commit.pull_request.html_url} title={commit.title}>
            {commit.title}
          </CustomLink>
        </h3>
        <div className="mt-1 text-gray-500 dark:text-gray-400">
          #{commit.number} by {commit.user.login} · {mergedAtFormatted}
        </div>
      </CardContent>
    </Card>
  );
}
