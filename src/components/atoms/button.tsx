type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded bg-blue-500 px-4 py-2 text-white"
    >
      {children}
    </button>
  );
};

export default Button;
