import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Airbus header", () => {
  render(<App />);
  const headerText = screen.getByText(
    "AIRBUS Aerothon 4.0 - Web application toolkit"
  );
  expect(headerText).toBeInTheDocument();
});
