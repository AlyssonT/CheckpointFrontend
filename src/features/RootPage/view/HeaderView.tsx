import { Button } from "../../../components/Button";
import { CiSearch } from "react-icons/ci";
import { useHeaderController } from "../controller/HeaderController";

export function HeaderView() {
  const {
    handleLogoClick,
    handleLoginClick,
    handleRegisterClick,
    handleSearchChange,
    handleSearch,
  } = useHeaderController();

  return (
    <header className="fixed h-16 bg-primary shadow border-b-1 border-gray-900 z-50 w-full grid grid-cols-3 items-center">
      <div className="ml-16">
        <img
          src="/logo_typography.svg"
          height={32}
          width={160}
          style={{ objectFit: "contain", cursor: "pointer" }}
          alt="Logo"
          onClick={handleLogoClick}
        />
      </div>
      <div className="flex items-center justify-center">
        <input
          className="rounded-4xl bg-tertiary focus:outline-0 px-4 py-1 text-black min-w-96"
          onKeyDown={handleSearch}
          onChange={handleSearchChange}
        />
        <div className="relative right-8 top-1/2 text-black rounded cursor-pointer p-0.5">
          <span onClick={() => handleSearch()}>
            <CiSearch size={20} />
          </span>
        </div>
      </div>
      <div className="flex justify-end space-x-2 mr-4">
        <Button variant="contained" size="sm" onClick={handleLoginClick}>
          Entrar
        </Button>
        <Button variant="outlined" size="sm" onClick={handleRegisterClick}>
          Cadastrar
        </Button>
      </div>
    </header>
  );
}
