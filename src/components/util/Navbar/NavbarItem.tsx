import { Link } from 'react-router-dom';

interface NavbarItemProps {
  name: string;
  link: string;
  className?: string;
}

export const NavbarItem = ({ name, link, className }: NavbarItemProps) => {
  return (
    <li className={`list-none text-white ${className}`}>
      <Link to={link}>{name}</Link>
    </li>
  );
};
