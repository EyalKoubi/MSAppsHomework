import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import ImageGrid from "./ImageGrid";
import { describe, it, expect } from "vitest";

describe("ImageGrid", () => {
  it("renders category title", () => {
    render(
      <Provider store={store}>
        <ImageGrid />
      </Provider>
    );

    expect(screen.getByText(/dogs/i)).not.toBeNull();
  });
});
