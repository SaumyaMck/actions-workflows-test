import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;
beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

test("correctly renders header", () => {
  const headerElement = getByTestId("header");
  expect(headerElement.textContent).toBe("My Counter");
});

test("Counter initially starts at 0", () => {
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});

test("Input contains intial value as 1", () => {
  const inputEl = getByTestId("input");
  expect(inputEl.value).toBe("1");
});

test("Add button renders with + sign", () => {
  const addBtn = getByTestId("add-btn");
  expect(addBtn.textContent).toBe("+");
});

test("Add button renders with - sign", () => {
  const subsBtn = getByTestId("subs-btn");
  expect(subsBtn.textContent).toBe("-");
});

test("Change value of input works correctly", () => {
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: "9",
    },
  });
  expect(inputEl.value).toBe("9");
});

test("Click + btn adds 1 to counter", () => {
  const addBtn = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(addBtn);
  expect(counterEl.textContent).toBe("1");
});

test("Click - btn subs 1 to counter", () => {
  const subsBtn = getByTestId("subs-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(subsBtn);
  expect(counterEl.textContent).toBe("-1");
});

test("change input value and Click + btn works correctly", () => {
  const addBtn = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtn);
  expect(counterEl.textContent).toBe("5");
});

test("change input value and Click - btn works correctly", () => {
  const subsBtn = getByTestId("subs-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(subsBtn);
  expect(counterEl.textContent).toBe("-5");
});

test("adding then substracting leads to correct counter", () => {
  const subsBtn = getByTestId("subs-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  const addBtn = getByTestId("add-btn");
  fireEvent.change(inputEl, {
    target: {
      value: "10",
    },
  });
  fireEvent.click(addBtn);
  fireEvent.click(subsBtn);
  expect(counterEl.textContent).toBe("0");
});

test("counter contains correct className", () => {
  const subsBtn = getByTestId("subs-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  const addBtn = getByTestId("add-btn");
  fireEvent.change(inputEl, {
    target: {
      value: "102",
    },
  });
  fireEvent.click(addBtn);
  expect(counterEl.className).toBe("green");
});
