import { useNavigate } from "react-router";
import { Button } from "../../../components/Button";

export function HeaderView() {
  const navigate = useNavigate();

  return (
    <header className="fixed h-16 bg-primary text-white shadow border-b-1 border-gray-900 z-50 w-full grid grid-cols-3 items-center">
      <div className="ml-16">
        <img
          src="/logo_typography.svg"
          height={32}
          width={177}
          style={{ objectFit: "contain", cursor: "pointer" }}
          alt="Logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex items-center justify-center">
        <input className="rounded-4xl bg-tertiary" />
      </div>
      <div className="flex justify-end space-x-2 mr-4">
        <Button
          variant="contained"
          size="sm"
          onClick={() => navigate("/login")}
        >
          Entrar
        </Button>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => navigate("/register")}
        >
          Cadastrar
        </Button>
      </div>
    </header>
  );
}
