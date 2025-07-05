interface PaperProps {
  className?: string;
  children?: React.ReactNode;
}

export function Paper({ className = "", children }: PaperProps) {
  return <div className={`shadow-md rounded-lg ${className}`}>{children}</div>;
}
