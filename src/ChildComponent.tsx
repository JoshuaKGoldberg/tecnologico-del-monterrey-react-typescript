import { useState } from "react";
import { MyComponent } from "./MyComponent";

export interface ChildComponentProps {
  className?: string;
  onChange: (newValue: string) => void;

  onChanges: ((newValue: string) => void)[];
  onChanges: ((newValue: string) => void)[];
  value: string;
}

export function ChildComponent({ onChange, value }: ChildComponentProps) {
  return (
    <input
      onChange={(event) => onChange(event.target.value)}
      type="text"
      value={value}
    />
  );
}

const _ = (
  <ChildComponent
    onChange={(newValue) => {
      myFirstFunction(value);
      mySecondFunction(value);
    }}
  />
);
