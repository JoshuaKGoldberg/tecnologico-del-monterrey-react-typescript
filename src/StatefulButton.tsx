import { useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

export function StatefulButton() {
  const [count, setCount] = useLocalStorageState(0, "my-count");

  return (
    <button
      type="button"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      click meeee {count}
    </button>
  );
}
