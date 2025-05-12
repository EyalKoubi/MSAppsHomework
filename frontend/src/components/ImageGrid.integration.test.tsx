import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import ImageGrid from "./ImageGrid";
import { describe, it, expect } from "vitest";

describe("ImageGrid Integration", () => {
  it("opens the category modal when button is clicked", () => {
    render(
      <Provider store={store}>
        <ImageGrid />
      </Provider>
    );

    const openBtn = screen.getByRole("button", { name: "Choose Category" });
    fireEvent.click(openBtn);

    const dogsButton = screen.queryByText("dogs");
    expect(dogsButton).not.toBeNull();

    const modalTitle = screen.queryByRole("heading", {
      name: "Choose Category",
    });
    expect(modalTitle).not.toBeNull();
  });
});
