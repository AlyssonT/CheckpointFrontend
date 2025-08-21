export function UnknownError() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary gap-4">
      <p className="text-lg">Oops!</p>
      <p className="text-lg">Something went wrong.</p>
      <p>An unknown error has occurred. Please try again later.</p>
    </div>
  );
}
