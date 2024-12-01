import { Link } from '@remix-run/react';
import ThemeSwitch from './theme-switch';

export default function Header() {
  return (
    <div className='border-b border-stroke-soft-200'>
      <header className='mx-auto flex h-14 max-w-5xl items-center justify-between px-5'>
        <Link
          to='/'
          className='flex items-center gap-2 text-label-md text-text-strong-950'
        >
          <img
            src='/images/logo.svg'
            alt=''
            className='size-9 object-contain'
          />
          AlignUI
        </Link>

        <ThemeSwitch />
      </header>
    </div>
  );
}
