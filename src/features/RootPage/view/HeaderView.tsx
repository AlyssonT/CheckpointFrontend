import { Button } from "../../../components/Button";
import { CiSearch } from "react-icons/ci";
import { useHeaderController } from "../controller/HeaderController";
import { Popover } from "../../../components/Popover";
import { Paper } from "../../../components/Paper";

export function HeaderView() {
  const {
    handleLogoClick,
    handleLoginClick,
    handleRegisterClick,
    handleSearchChange,
    handleSearch,
    user,
    isLoggedIn,
    profileMenuData,
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
      <div className="flex justify-end mr-8">
        {isLoggedIn ? (
          <Popover
            anchor={
              <div className="flex space-x-2 items-center">
                <img
                  src="/avatar_placeholder.png"
                  alt="avatar"
                  width={32}
                  height={32}
                  className="rounded-full border-secondary border-2"
                />
                <p>{user.name}</p>
              </div>
            }
          >
            {({ close }) => (
              <Paper className="p-2 bg-primary flex-col">
                {profileMenuData.map((menuItem) => (
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => menuItem.onClick(close)}
                    noFocusRing
                  >
                    {menuItem.label}
                  </Button>
                ))}
              </Paper>
            )}
          </Popover>
        ) : (
          <div className="flex space-x-2">
            <Button variant="contained" size="sm" onClick={handleLoginClick}>
              Login
            </Button>
            <Button variant="outlined" size="sm" onClick={handleRegisterClick}>
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
