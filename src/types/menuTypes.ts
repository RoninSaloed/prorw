import { Component } from "vue";

export type menuTypes = {
  title: string;
  icon?: Component;
};

export type langTypes<T> = {
  title: T;
};
