import { MenuType } from '@/components/layout/Navigation';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdDoNotDisturb, MdOutlineLanguage } from 'react-icons/md';
import { TiHome } from 'react-icons/ti';

export const MENU: Record<string, MenuType> = {
  home: { key: 'home', value: 'Home', url: '/', icon: <TiHome /> },
  component: {
    key: 'component',
    value: 'Component',
    url: '/components',
    icon: <LuLayoutDashboard />,
  },
  locale: {
    key: 'locale',
    value: 'Locale',
    url: '/locale',
    icon: <MdOutlineLanguage />,
  },
  disabled: {
    key: 'disabled',
    value: 'Disabled',
    url: '/disabled',
    icon: <MdDoNotDisturb />,
    isDisabled: true,
  },
};
