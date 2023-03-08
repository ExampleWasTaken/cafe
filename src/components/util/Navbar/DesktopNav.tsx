import { NavbarItem } from './NavbarItem';

export const DesktopNav = () => {
  return (
    <ul className="list-none flex flex-row justify-evenly">
      <NavbarItem
        name="Home"
        link="/"
      />
      <NavbarItem
        name="Menu"
        link="/menu"
      />
      <NavbarItem
        name="About"
        link="/about"
      />
    </ul>
  );
};
