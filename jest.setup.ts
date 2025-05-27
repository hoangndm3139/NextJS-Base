import { server } from "@/mocks/server";
import { QueryCache } from "@tanstack/react-query";
import "@testing-library/jest-dom";

const queryCache = new QueryCache();

beforeAll(() => {
  // Start the interception.
  server.listen();
});

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers();
  queryCache.clear(); // Clear the query cache after each test https://mswjs.io/docs/faq/
});

afterAll(() => {
  // Disable request interception and clean up.
  server.close();
});
