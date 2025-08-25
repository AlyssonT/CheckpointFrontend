import { useState } from "react";

export function useShowHideReviewForm({
  defaultState = false,
}: {
  defaultState: boolean;
}) {
  const [shouldShowForm, setShouldShowForm] = useState(defaultState);

  const handleClickAdd = () => {
    setShouldShowForm(true);
  };

  const handleHideForm = () => {
    setShouldShowForm(false);
  };

  return {
    handleClickAdd,
    handleHideForm,
    shouldShowForm,
  };
}
