const variantMapClass: Record<string, string> = {
  contained:
    "bg-secondary text-primary hover:bh-secondary-dark rounded transition-colors",
  outlined:
    "border-secondary border-2  hover:bg-secondary-dark transition-colors",
  ghost: " hover:bg-secondary-dark transition-colors",
  danger: "bg-red-500  hover:bg-red-600",
};

const buttonSizes: Record<string, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
};

interface ButtonProps {
  variant?: keyof typeof variantMapClass;
  size?: keyof typeof buttonSizes;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export function Button({
  variant = "contained",
  size = "md",
  type = "button",
  className = "",
  disabled = false,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded transition-colors duration-200 font-medium focus:outline-none focus:ring-1 focus:ring-focus disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantMapClass[variant]} ${buttonSizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
