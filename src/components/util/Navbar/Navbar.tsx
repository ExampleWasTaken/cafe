import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { MobileNav } from './MobileNav';
import { NavbarDivider } from './NavbarDivider';

export const Navbar = () => {

  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {

    const resizeHandler = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className="sticky top-0 left-0 z-10 bg-white flex flex-col">
      <nav className="w-full mt-3 px-5 flex flex-row justify-between items-center">
        <Logo />
        {isMobile ? (
          <MobileNav />
        ) : (
          <>
            {/* <DesktopNav /> */}
            <code>Desktop not yet implemented</code>
          </>
        )}
      </nav>
      <NavbarDivider />
    </div>
  );
};
