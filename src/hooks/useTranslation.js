import React, { useState, useEffect } from "react";
import { useTranslation as useTranslationI18Next } from "react-i18next";

export default function useTranslation(namespace) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t, i18n } = useTranslationI18Next(namespace);

  useEffect(() => {
    if (
      i18n.isInitialized ||
      (namespace && i18n.hasLoadedNamespace(namespace))
    ) {
      setIsLoaded(true);
    }
  }, [i18n.isInitialized, namespace]);
  return { t, i18n, isLoaded };
}
