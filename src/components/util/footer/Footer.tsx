import { Address } from './Address';

export const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center py-16 font-light">
      <Address
        name="SchülerCAFÉ Havelhöhe"
        street="Neukladower Allee 1"
        code="14089 Berlin"
        email="max.mustermann@gmail.com"
      />
    </div>
  );
};
