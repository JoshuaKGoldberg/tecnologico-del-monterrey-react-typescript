import React from "react";
import { render, screen } from "@testing-library/react";
import Aalksdfjalskdfjalskdjfasldfj from "./App";

test("renders learn react link", () => {
  render(<Aalksdfjalskdfjalskdjfasldfj />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
