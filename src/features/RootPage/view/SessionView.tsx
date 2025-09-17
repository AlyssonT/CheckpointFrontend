import { Button } from "../../../components/Button";

interface SessionViewProps {
  handleLoginClick: () => void;
  handleRegisterClick: () => void;
}

export function SessionView({
  handleLoginClick,
  handleRegisterClick,
}: SessionViewProps) {
  return (
    <div className="flex space-x-2">
      <Button variant="contained" size="sm" onClick={handleLoginClick}>
        Login
      </Button>
      <Button variant="outlined" size="sm" onClick={handleRegisterClick}>
        Sign Up
      </Button>
    </div>
  );
}
