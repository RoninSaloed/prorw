import { Lang, LANG_STORAGE } from "../configs/menuConfig";

export const getDefaultLang = (): Lang => {
  const localStorageLocale = localStorage.getItem(LANG_STORAGE);
  if (localStorageLocale === undefined || localStorageLocale === null) {
    return Lang.UA;
  }

  return localStorageLocale as Lang;
};
