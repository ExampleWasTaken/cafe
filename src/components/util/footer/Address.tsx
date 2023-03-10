interface AddressProps {
  name: string;
  street: string;
  code: string;
  email: string;
}

export const Address = ({ name, street, code, email }: AddressProps) => {
  return (
    <div className="flex flex-col font-light text-sm tracking-wide">
      <p>{name}</p>
      <p>{street}</p>
      <p>{code}</p>
      <p
        className="underline cursor-pointer"
        onClick={() => navigator.clipboard.writeText(email)}
      >
        {email}
      </p>
    </div>
  );
};
