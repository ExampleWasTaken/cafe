import { Logo } from './Logo';
import { NavbarItem } from './NavbarItem';
import { TbMenu2, TbX } from 'react-icons/tb';
import { useState } from 'react';

export const MobileNav = () => {

  const [open, setOpen] = useState(false);

  const closeHandler = () => {
    setOpen(false);
  };

  const openHandler = () => {
    setOpen(true);
  };

  return (
    <>
      {open ? (
        <div className="absolute top-0 left-0 w-screen h-screen px-10 py-10 bg-black">
          <div className="flex flex-col">
            <div
              className="flex flex-row items-center justify-between"
              onClick={closeHandler}
            >
              <Logo />
              <TbX
                fill='white'
                size={29}
                className="cursor-pointer text-white"
                onClick={closeHandler}
              />
            </div>
            <ul
              className="list-none flex flex-col justify-around my-8 text-left"
              onClick={closeHandler}
            >
              <NavbarItem
                name="Home"
                link='/'
                className='py-1'
              />
              <NavbarItem
                name="Menü"
                link="/menu"
                className="py-1"
              />
              <NavbarItem
                name="Über uns"
                link="/About"
                className='py-1'
              />
            </ul>
          </div>
        </div>
      ) : (
        <div className="">
          <TbMenu2
            fill='black'
            size={29}
            className="cursor-pointer"
            onClick={openHandler}
          />
        </div>
      )}
    </>
  );
};
