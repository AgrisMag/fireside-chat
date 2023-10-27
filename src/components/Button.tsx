type ButtonProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, name }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white border rounded-md text-lg cursor-pointer transition duration-300 hover:bg-blue-700"
      name={name}
    >
      {children}
    </button>
  );
};
