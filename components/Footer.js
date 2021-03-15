import Image from 'next/image';
import { useState } from 'react';
import CustomLink from './CustomLink';

export default function Footer() {
  const [copyEmail, setCopyEmail] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText('simon.wallstrom@gmail.com')
      .then(function () {
        setCopyEmail(true);
        setTimeout(() => {
          setCopyEmail(false);
        }, 2500);
      });
  };
  return (
    <footer
      id="contact"
      className="px-4 py-10 mt-10 text-center bg-white dark:bg-gray-900 md:mt-16 lg:mt-24 md:py-16 lg:py-24 md:px-8"
    >
      <div className="grid max-w-lg gap-8 mx-auto md:max-w-2xl md:grid-cols-2">
        <div>
          <div className="flex flex-col items-center md:space-x-4 md:flex-row">
            <div className="relative flex mb-5 md:mb-0">
              {copyEmail && (
                <div className="copy-email-tooltip">Email copied</div>
              )}
              <Image
                className="rounded-full"
                src="/me.jpg"
                alt="Picture of me!"
                width="96px"
                height="96px"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="font-mono text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Stockholm · Sweden
              </div>
              <div className="mt-1 text-2xl font-semibold dark:text-white">
                Simon Wallström
              </div>
              <div className="mt-2 space-x-2 text-sm">
                <CustomLink
                  className="border-b border-current border-dashed hover:border-solid"
                  href="https://github.com/simonwallstrom"
                >
                  Github
                </CustomLink>
                <span className="font-bold">·</span>
                <CustomLink
                  className="border-b border-current border-dashed hover:border-solid"
                  href="https://twitter.com/simonwallstrom"
                >
                  Twitter
                </CustomLink>
                <span className="font-bold">·</span>
                <button
                  onClick={handleCopyEmail}
                  className="leading-tight border-b border-current border-dashed hover:border-solid"
                  href="mailto:simon.wallstrom@gmail.com"
                >
                  Copy email
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-mono text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
            About this site
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            This site is built using{' '}
            <CustomLink
              className="font-medium text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
              href="https://nextjs.org/"
            >
              Next.js
            </CustomLink>
            , styled with{' '}
            <CustomLink
              className="font-medium text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
              href="https://tailwindcss.com/"
            >
              Tailwind CSS
            </CustomLink>{' '}
            and hosted on{' '}
            <CustomLink
              className="font-medium text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
              href="https://vercel.com/"
            >
              Vercel
            </CustomLink>
            . You can check out the source code on{' '}
            <CustomLink
              className="font-medium text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
              href="https://github.com/simonwallstrom/simonwallstrom.com"
            >
              Github
            </CustomLink>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
