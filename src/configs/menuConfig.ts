import ArrowIcon from "../assets/icons/ArrowIcon.vue";
import { menuTypes } from "../types/menuTypes";

export const firstPartMenuConfig: menuTypes[] = [
  { title: "home" },
  { title: "shop", icon: ArrowIcon },
  { title: "collections", icon: ArrowIcon },
];

export enum Lang {
  UA = "UA/UAH",
  EN = "EN/USD",
}

export const LANG_STORAGE = "lang" as const;
