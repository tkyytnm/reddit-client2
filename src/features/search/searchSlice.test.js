import { searchReducer, setSearchTerm } from "./searchSlice";

test("should return the initial state", () => {
  expect(searchReducer(undefined, {})).toEqual({
    searchTerm: "",
  });
});

test("should handle a searchTerm being set to an empty string", () => {
  const previousState = {
    searchTerm: "",
  };
  expect(searchReducer(previousState, setSearchTerm("Hello!"))).toEqual({
    searchTerm: "Hello!",
  });
});

test("should handle a searchTerm being set to an existing string", () => {
  const previousState = {
    searchTerm: "Hello!",
  };
  expect(searchReducer(previousState, setSearchTerm("Good Night!"))).toEqual({
    searchTerm: "Good Night!",
  });
});
