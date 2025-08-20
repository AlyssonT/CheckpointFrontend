interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function Paper({ className = "", children, ...props }: PaperProps) {
  return (
    <div {...props} className={`shadow-lg rounded-lg bg-paper ${className}`}>
      {children}
    </div>
  );
}
