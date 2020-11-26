import React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createMemoryHistory } from "history"

import "./mocks/matchMedia"
import App from "../src/App"

describe("Routing", () => {
  it("renders Main page correctly", () => {
    const result = render(<App />)

    const headerEl = result.getByText("Books")

    expect(headerEl).toBeTruthy()
  });

  it("navigation to Book page and back to homepage works correctly", () => {
    const history = createMemoryHistory();
    const result = render(<App history={history} />);

    const goAddBookBtn = result.getByText("Add Book");
    userEvent.click(goAddBookBtn);

    const headerEl = result.getByText("Add New Book");
    expect(headerEl).toBeTruthy();

    const { location: { pathname } } = history;
    expect(pathname).toBe("/book/new");

    const goBackBtn = result.getByText("Crown-Books");
    userEvent.click(goBackBtn);

    const mainHeaderEl = result.getByText("Books");

    expect(mainHeaderEl).toBeTruthy();
  });
});
