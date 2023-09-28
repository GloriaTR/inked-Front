import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  actionOnClick?: () => void;
}

const Button = ({
  className,
  actionOnClick,
  children,
  ...props
}: ButtonProps): React.ReactElement => {
  return (
    <button className={className} onClick={actionOnClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
