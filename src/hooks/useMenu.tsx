interface MenuItemObject {
  id: number;
  name: string;
  description?: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  price: string;
}

export interface MenuObject {
  menu: MenuItemObject[];
}

export const useMenu = () => {
  return async (): Promise<MenuObject> => {
    const res = await fetch('assets/menu.json');
    return res.json() as Promise<MenuObject>;
  };
};
