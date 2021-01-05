import Image from 'next/image';
import ExternalLink from './ExternalLink';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="px-4 py-10 bg-gray-100 md:py-16 lg:py-24 md:px-8"
    >
      <div className="grid max-w-lg gap-8 mx-auto md:max-w-4xl md:grid-cols-2">
        <div>
          <div className="flex flex-col items-center md:space-x-4 md:flex-row">
            <div className="mb-5 md:mb-0">
              <Image
                className="block rounded-full"
                src="/me.jpg"
                alt="Picture of me!"
                width="96px"
                height="96px"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="text-xs tracking-widest text-gray-600 uppercase">
                Stockholm · Sweden
              </div>
              <div className="mt-1 text-2xl font-semibold">Simon Wallström</div>
              <div className="mt-2 space-x-2 text-sm">
                <ExternalLink
                  className="border-b border-current border-dashed"
                  href="https://github.com/simonwallstrom"
                >
                  Github
                </ExternalLink>
                <span className="font-bold">·</span>
                <ExternalLink
                  className="border-b border-current border-dashed"
                  href="https://twitter.com/simonwallstrom"
                >
                  Twitter
                </ExternalLink>
                <span className="font-bold">·</span>
                <ExternalLink
                  className="border-b border-current border-dashed"
                  href="mailto:simon.wallstrom@gmail.com"
                >
                  Mail
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xs tracking-widest text-gray-600 uppercase">
            About this site
          </h3>
          <p className="mt-2 text-gray-600">
            This site is built using{' '}
            <ExternalLink
              className="font-medium text-black hover:text-gray-600"
              href="https://nextjs.org/"
            >
              Next.js
            </ExternalLink>
            , styled with{' '}
            <ExternalLink
              className="font-medium text-black hover:text-gray-600"
              href="https://tailwindcss.com/"
            >
              Tailwind CSS
            </ExternalLink>{' '}
            and hosted on{' '}
            <ExternalLink
              className="font-medium text-black hover:text-gray-600"
              href="https://vercel.com/"
            >
              Vercel
            </ExternalLink>
            . You can check out the source code on{' '}
            <ExternalLink
              className="font-medium text-black hover:text-gray-600"
              href="https://github.com/simonwallstrom/simonwallstrom.com"
            >
              Github
            </ExternalLink>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
