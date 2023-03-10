import { useEffect, useState } from 'react';
import { useMenu, MenuObject } from '../../hooks/useMenu';
import { Container } from '../util/Container';
import { MenuItem } from './MenuItem';

export const MenuList = () => {

  const [menu, setMenu] = useState<MenuObject | null>(null);

  const getMenu = useMenu();

  useEffect(() => {
    getMenu().then(res => setMenu(res));
  }, []);

  return (
    <Container className='my-5'>
      <h1 className="font-light text-xl text-center">Menü</h1>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menu?.menu.map(current => {
          return (
            <MenuItem
              name={current.name}
              description={current.description}
              isVegan={current.isVegan}
              isVegetarian={current.isVegetarian}
              price={current.price}
              key={current.id}
            />
          );
        })}
      </div>
    </Container>
  );
};
