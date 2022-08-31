import Image from 'next/image';
import { HeaderItem } from './HeaderItem';
import {
  BoltIcon,
  CheckBadgeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const headerItems = [
  { title: 'HOME', icon: HomeIcon },
  { title: 'TRENDING', icon: BoltIcon },
  { title: 'VERIFIED', icon: CheckBadgeIcon },
  { title: 'COLLECTIONS', icon: RectangleStackIcon },
  { title: 'SEARCH', icon: MagnifyingGlassIcon },
  { title: 'ACCOUNT', icon: UserIcon },
];

export const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        {headerItems.map((item) => {
          return <HeaderItem title={item.title} Icon={item.icon} />;
        })}
      </div>
      <Image
        className='object-contain'
        src='/../public/hulu-logo.png'
        width={180}
        height={80}
      />
    </header>
  );
};
