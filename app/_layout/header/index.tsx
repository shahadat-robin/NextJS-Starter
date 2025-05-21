'use client';

import Container from '@/components/container';
import IconStore from '@/components/icon-store';
import { cn } from '@/utils/class-merge';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const navItems = [
  { key: 'services', label: 'Services' },
  { key: 'work', label: 'Work' },
  { key: 'resources', label: 'Resources' },
  { key: 'news', label: 'News' },
  { key: 'about', label: 'About us' },
];

export default function AppHeader() {
  const { theme, setTheme } = useTheme();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeMegaMenu, setActiveMegaMenu] = useState('');

  useEffect(() => {
    setHeaderHeight(document.getElementsByTagName('header')[0]?.offsetHeight);
  }, []);

  return (
    <span onMouseLeave={() => setActiveMegaMenu('')}>
      <header
        className={cn(
          'py-5 fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          activeMegaMenu && 'bg-white'
        )}
      >
        <Container className="flex items-center justify-between">
          <Image
            src="/next.svg"
            alt="Brand logo"
            width={100}
            height={50}
            className="h-auto w-[6.25rem] cursor-pointer"
            priority
          />

          <nav
            className={cn(
              'flex items-center gap-10 font-semibold py-4 px-10 text-dark transition-all',
              !activeMegaMenu && 'bg-[rgba(0,0,0,0.10)] backdrop-blur-lg rounded-full text-white'
            )}
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href="#"
                onMouseEnter={() => setActiveMegaMenu(item.key)}
                className={cn(
                  'relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-dark after:transition-all after:duration-300',
                  activeMegaMenu === item.key && 'after:w-full'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

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

      <section
        className={cn(
          'fixed left-0 right-0 bg-white text-dark h-1/2 transition-all duration-500 z-40'
        )}
        style={{ top: activeMegaMenu ? headerHeight + 'px' : '-100%' }}
      >
        <Container className="py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum, neque sequi,
          suscipit laborum ipsa veniam similique soluta dolorem tenetur necessitatibus cumque
          accusantium cum adipisci eius architecto earum sint consequatur.
        </Container>
      </section>
    </span>
  );
}
