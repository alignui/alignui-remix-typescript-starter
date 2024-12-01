import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { RiGithubFill } from '@remixicon/react';
import * as Button from '~/components/ui/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className='container mx-auto flex-1 px-5'>
      <div className='mt-48 flex flex-col items-center'>
        <h1 className='max-w-3xl text-balance text-center text-title-h3 text-text-strong-950'>
          Quick Starter AlignUI Template with Next.js & Typescript
        </h1>

        <div className='mt-6 flex gap-4'>
          <Button.Root variant='neutral' asChild>
            <a
              href='https://github.com/alignui/alignui-remix-typescript-starter'
              target='_blank'
              rel='noreferrer'
            >
              <Button.Icon as={RiGithubFill} />
              Give a star
            </a>
          </Button.Root>

          <Button.Root variant='neutral' mode='stroke' asChild>
            <Link
              to='https://alignui.com/docs'
              target='_blank'
              rel='noreferrer'
            >
              Read our docs
            </Link>
          </Button.Root>
        </div>

        <div className='mt-12'>
          <h2 className='text-lg text-text-primary font-semibold'>
            What&apos;s Included:
          </h2>
          <ul className='ml-6 mt-3 flex list-disc flex-col gap-2 font-mono text-paragraph-sm font-medium text-text-sub-600'>
            <li>Tailwind setup with AlignUI tokens.</li>
            <li>
              Base components are stored in{' '}
              <code className='rounded bg-bg-weak-50 px-1 py-0.5 font-semibold text-text-strong-950'>
                /components/ui
              </code>{' '}
              folder.
            </li>
            <li>
              Utils are stored in{' '}
              <code className='rounded bg-bg-weak-50 px-1 py-0.5 font-semibold text-text-strong-950'>
                /utils
              </code>{' '}
              folder.
            </li>
            <li>
              Custom hooks are stored in{' '}
              <code className='rounded bg-bg-weak-50 px-1 py-0.5 font-semibold text-text-strong-950'>
                /hooks
              </code>{' '}
              folder.
            </li>
            <li>Dark mode setup.</li>
            <li>Inter font setup.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
