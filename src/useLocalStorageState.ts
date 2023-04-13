import { useState } from "react";

export function useLocalStorageState<T>(defaultValue: T, key: string) {
  const initialValue = (localStorage.getItem(key) ?? defaultValue) as T;
  const [value, setValue] = useState(initialValue);

  return [value, setValue] as const;
}
