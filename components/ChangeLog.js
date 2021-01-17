import { GitPullRequest } from 'react-feather';
import { Card, CardContent, CardHeader } from './Card';
import ExternalLink from './ExternalLink';

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
          className="text-indigo-600"
        />
        <h3 className="mt-2 text-lg leading-tight clamp-2">
          <ExternalLink
            href={commit.pull_request.html_url}
            title={commit.title}
          >
            {commit.title}
          </ExternalLink>
        </h3>
        <div className="mt-1 text-gray-500">
          #{commit.number} by {commit.user.login} · {mergedAtFormatted}
        </div>
      </CardContent>
    </Card>
  );
}
