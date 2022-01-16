import { useState, useEffect } from "react";

function getLocalStorage(key: string, defaultValue: any) {
  const value: any = localStorage.getItem(key);
  const existing = JSON.parse(value);
  return existing || defaultValue;
}

export const useLocalStorage = (
  key: string,
  defaultValue: any
): [string, (p: string) => void] => {
  const [value, setValue] = useState(() => {
    return getLocalStorage(key, defaultValue);
  });

  useEffect(() => {
    console.log(`Setting ${key}: ${value}`);
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
