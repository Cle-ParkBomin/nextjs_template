'use client';
import { useColorByTheme } from '@/hooks/useColorByTheme';
import { usePathname, useRouter } from 'next/navigation';
import React, { JSX } from 'react';

export interface MenuType {
  key: string;
  value: string;
  url: string;
  icon: JSX.Element;
  isDisabled?: boolean;
}

interface NavigationProps {
  menu: Record<string, MenuType>;
}

export default function Navigation({ menu }: NavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const grey0 = useColorByTheme('grey-0');

  const variantStyle = {
    default: { button: 'cursor-pointer text-grey-400', iconWrapper: 'bg-grey-400' },
    active: { button: 'cursor-pointer text-primary-500', iconWrapper: 'bg-primary-500' },
    disabled: { button: 'cursor-not-allowed text-grey-200', iconWrapper: 'bg-grey-200' },
  };

  const getIconStyle = () => {
    return {
      width: 20,
      height: 20,
      color: grey0,
    };
  };
  const styledIcon = (icon: JSX.Element) =>
    React.cloneElement(icon, {
      style: getIconStyle(),
    });

  return (
    <div className='flex h-full flex-col bg-grey-0 shadow-strong'>
      {Object.values(menu).map((item) => {
        const isHome = item.url === '/';
        const variantKey = item.isDisabled
          ? 'disabled'
          : isHome
            ? pathname === '/'
              ? 'active'
              : 'default'
            : pathname.startsWith(item.url)
              ? 'active'
              : 'default';

        return (
          <div className='flex p-2' key={`navigation_${item.key}`}>
            <button
              className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-lg p-4 text-12 leading-16 hover:bg-grey-950/4 ${variantStyle[variantKey].button}`}
              onClick={() => router.push(item.url)}
              disabled={item.isDisabled}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                  variantStyle[variantKey].iconWrapper
                }`}
              >
                {styledIcon(item.icon)}
              </div>
              <p>{item.value}</p>
            </button>
          </div>
        );
      })}
    </div>
  );
}
