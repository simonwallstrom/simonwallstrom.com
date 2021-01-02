import { GitPullRequest } from 'react-feather';
import Card from './Card';

export default function ChangeLog({ commit }) {
  const mergedAt = new Date(commit.closed_at);
  const mergedAtFormatted = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(mergedAt);

  return (
    <Card>
      <div className="flex items-center text-indigo-600">
        <GitPullRequest size={16} className="mr-2" />
        <div className="text-xs font-medium tracking-widest uppercase">
          Changelog
        </div>
      </div>
      <div className="flex items-center mt-1">
        <div className="text-lg font-semibold">
          <a
            className="flex items-center"
            target="_blank"
            title={commit.title}
            href={commit.pull_request.html_url}
          >
            <div className="clamp-1">{commit.title}</div>
          </a>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        #{commit.number} by {commit.user.login} · {mergedAtFormatted}
      </div>
    </Card>
  );
}
