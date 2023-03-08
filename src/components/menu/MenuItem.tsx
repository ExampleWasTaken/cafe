interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
}

export const MenuItem = ({ name, description, price, isVegetarian, isVegan }: MenuItemProps) => {
  return (
    <div className="rounded bg-white py-2 px-4 drop-shadow-xl font-light">
      <div className="flex flex-row justify-between pb-2 border-b border-slate-400">
        <div className="flex flex-row justify-between items-center w-full pr-2">
          {name.toUpperCase()}{isVegetarian && (
            <img
              className="h-5"
              src="./assets/icons/vegetarian-icon.svg"
            />
          )}{isVegan && (
            <img
              className="h-7"
              src="./assets/icons/vegan-icon.svg"
            />
          )}
        </div>
        <span className="flex items-center">{price}&nbsp;€</span>
      </div>
      <div className="text-center py-3">
        {description}
      </div>
    </div>
  );
};
