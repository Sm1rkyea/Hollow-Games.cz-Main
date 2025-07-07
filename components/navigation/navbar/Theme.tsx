'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="classic"
          size="icon"
          className="relative cursor-pointer"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-dark-100 dark:border-dark-50 text-light-600"
      >
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={cn(
            theme === 'light' && '!bg-black/[0.05] text-light-700 dark:!bg-dark-50/80 dark:text-white/80',
            'cursor-pointer transition-all hover:bg-black/[0.025] dark:hover:!bg-dark-50'
          )}
        >
          Světlé
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={cn(
            theme === 'dark' && '!bg-black/[0.05] text-light-700 dark:!bg-dark-50/80 dark:text-white/80',
            'cursor-pointer transition-all hover:bg-black/[0.025] dark:hover:!bg-dark-50'
          )}
        >
          Tmavé
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={cn(
            theme === 'system' && '!bg-black/[0.05] text-light-700 dark:!bg-dark-50/80 dark:text-white/80',
            'cursor-pointer transition-all hover:bg-black/[0.025] dark:hover:!bg-dark-50'
          )}
        >
          Systém
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
