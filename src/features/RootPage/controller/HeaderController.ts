import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../../stores/authStore";
import type { ProfileMenuItem } from "../model/HeaderModels";

export function useHeaderController() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const { user, logout } = useAuthStore();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (e?: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && e.key !== "Enter") return;
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const profileMenuData: ProfileMenuItem[] = [
    {
      label: "My profile",
      onClick: (closeMenu) => {
        closeMenu();
        navigate("/profile");
      },
    },
    {
      label: "Logout",
      onClick: (closeMenu) => {
        closeMenu();
        logout();
        navigate("/");
      },
    },
  ];

  return {
    handleLogoClick,
    handleLoginClick,
    handleRegisterClick,
    handleSearchChange,
    handleSearch,
    user,
    isLoggedIn: user.id !== null,
    profileMenuData,
  };
}
