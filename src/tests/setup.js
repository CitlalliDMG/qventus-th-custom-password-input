import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});
