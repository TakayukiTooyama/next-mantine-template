import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import Root from "@/pages/root";

it("Should render hello text", () => {
  render(<Root />);
  expect(screen.getByText("Hello, World")).toBeInTheDocument();
});
