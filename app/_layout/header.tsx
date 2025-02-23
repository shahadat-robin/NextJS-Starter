'use client';

import Container from '@/components/container';
import IconStore from '@/components/icon-store';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function AppHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="p-5 sticky top-0 bg-primary dark:bg-dark-light z-50">
      <Container className="flex items-center justify-between">
        <Image
          src="/next.svg"
          alt="Brand logo"
          width={100}
          height={50}
          className="h-auto w-[6.25rem] cursor-pointer"
          priority
        />

        <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
          <div className="relative min-h-[30px] w-[55px] rounded-full bg-white">
            <input
              type="checkbox"
              name="theme-mode"
              id="theme-toggle"
              className="checkbox hidden"
              onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-dark-light p-1 rounded-full transition-transform duration-200 dark:transform dark:-translate-x-full">
              <IconStore name="moon" className="hidden dark:block text-white" />
              <IconStore name="sun" className="block dark:hidden text-yellow-500" />
            </div>
          </div>
        </label>
      </Container>
    </header>
  );
}
