import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BasicModal from "./BasicModal";
const popupKey = "popup";

const popups = {
  welcome: BasicModal,
};

const GlobalPopup = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getPopupName = () => searchParams.get(popupKey) || null;
  const [mountedPopup, setMountedPopup] = useState(() => getPopupName());

  useEffect(() => {
    setMountedPopup(searchParams.get(popupKey));
  }, [searchParams]);

  const isOpened = useMemo(() => Boolean(mountedPopup), [mountedPopup]);

  const Component = popups[mountedPopup];
  if (!Component || !getPopupName()) {
    return null;
  }

  return (
    <Component
      handleClose={() => setSearchParams()}
      isOpened={isOpened}
      {...Object.fromEntries([...searchParams])}
    />
  );
};

export default GlobalPopup;
