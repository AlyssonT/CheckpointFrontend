interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function Paper({ className = "", children, ...props }: PaperProps) {
  return (
    <div {...props} className={`shadow-md rounded-lg ${className}`}>
      {children}
    </div>
  );
}
