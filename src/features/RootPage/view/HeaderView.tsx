import { Button } from "../../../components/Button";
import { CiSearch } from "react-icons/ci";
import { useHeaderController } from "../controller/HeaderController";
import { Popover } from "../../../components/Popover";
import { Paper } from "../../../components/Paper";
import { useResponsive } from "../../../hooks/useResponsive";
import { SessionView } from "./SessionView";
import { FaBars } from "react-icons/fa";

export function HeaderView() {
  const {
    searchQuery,
    handleLogoClick,
    handleLoginClick,
    handleRegisterClick,
    handleSearchChange,
    handleSearch,
    user,
    isLoggedIn,
    profileMenuData,
  } = useHeaderController();

  const { isMobile, isDesktop } = useResponsive();

  const SessionComponent = isMobile ? (
    <Popover anchor={<FaBars />} anchorPos="br" popoverPos="tr">
      {(helpers) => (
        <SessionView
          handleLoginClick={() => {
            handleLoginClick();
            helpers.close();
          }}
          handleRegisterClick={() => {
            handleRegisterClick();
            helpers.close();
          }}
        />
      )}
    </Popover>
  ) : (
    <SessionView
      handleLoginClick={handleLoginClick}
      handleRegisterClick={handleRegisterClick}
    />
  );

  return (
    <header className="fixed h-16 bg-primary shadow border-b-1 border-gray-900 z-50 w-full grid grid-cols-3 items-center">
      <div className="ml-6 md:ml-16">
        <img
          src={!isDesktop ? "/logo_robozin.svg" : "/logo_typography.svg"}
          height={32}
          width={!isDesktop ? 32 : 160}
          style={{ objectFit: "contain", cursor: "pointer" }}
          alt="Logo"
          onClick={handleLogoClick}
        />
      </div>
      <div className="flex items-center justify-center">
        <input
          value={searchQuery}
          className="rounded-4xl bg-tertiary focus:outline-0 px-4 py-1 text-black min-w-48 sm:min-w-64 md:min-w-96"
          spellCheck={false}
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
              <div className="flex space-x-2 items-center w-24">
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
                    key={menuItem.label}
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
          SessionComponent
        )}
      </div>
    </header>
  );
}
