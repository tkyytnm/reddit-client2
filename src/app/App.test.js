import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { render, fireEvent, screen } from "../../test-utils";
import App from "./App";
import { store } from "./store";

export const handlers = [
  rest.get("/", (req, res, ctx) => {
    return res();
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("fetches & receives a reddit data on displaying top page", async () => {
  render(<App />);
  expect(screen.getByText(/reddit dogs/i));
});
